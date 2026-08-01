import { getCollection, type CollectionEntry } from 'astro:content';
import {
  postUrl,
  chapterUrlByKey,
  bookUrlByKey,
  homeUrl,
  tagUrl,
  categoryUrl,
  localizePath,
  type Lang,
} from '../i18n';
import { tagMap, categoryMap, translateSlug } from '../i18n/taxonomy';

export type Post = CollectionEntry<'post'>;
type BookDesigner = CollectionEntry<'bookDesigner'>;
type BookTeam = CollectionEntry<'bookTeam'>;
export type Book = BookDesigner | BookTeam;

function isTeamBookKey(bookKey: string): boolean {
  return bookKey === 'the-augmented-team';
}

async function getBookEntries(bookKey: string): Promise<Book[]> {
  if (isTeamBookKey(bookKey)) {
    return (await getCollection('bookTeam')) as Book[];
  }
  return (await getCollection('bookDesigner')) as Book[];
}

const isProd = import.meta.env.PROD;

/** Published (non-draft in prod) posts for a language, newest first. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('post', ({ data }) => {
    return data.lang === lang && (!isProd || data.draft === false);
  });
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Book chapters (excluding the index) for a language, ordered by weight. */
export async function getChapters(lang: Lang, bookKey = 'the-augmented-designer'): Promise<Book[]> {
  const entries = await getBookEntries(bookKey);
  const chapters = entries.filter((entry) => {
    return entry.data.lang === lang && !entry.data.isIndex && (!isProd || entry.data.draft === false);
  });
  return chapters.sort((a, b) => a.data.weight - b.data.weight);
}

/** The book landing page entry for a language. */
export async function getBookIndex(
  lang: Lang,
  bookKey = 'the-augmented-designer'
): Promise<Book | undefined> {
  const entries = await getBookEntries(bookKey);
  return entries.find((entry) => entry.data.lang === lang && entry.data.isIndex);
}

/** Four-digit year for a post. */
export function postYear(post: Post): number {
  return post.data.date.getFullYear();
}

/** Estimated reading time in minutes (min 1), from the raw markdown body. */
export function readingTime(entry: Post | Book): number {
  const words = (entry.body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** All unique tags across a language's posts, with counts. */
export async function getTags(lang: Lang): Promise<Map<string, Post[]>> {
  const posts = await getPosts(lang);
  const map = new Map<string, Post[]>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      const key = tagSlug(tag);
      const list = map.get(key) ?? [];
      list.push(post);
      map.set(key, list);
    }
  }
  return map;
}

/** Slugify a tag/category name the way Hugo's urlize does. */
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // strip diacritics: á→a, ñ→n, í→i
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Display name for a tag slug within a language (original casing/accents). */
export async function tagDisplayName(slug: string, lang: Lang): Promise<string> {
  const posts = await getPosts(lang);
  for (const post of posts) {
    const match = post.data.tags.find((tag) => tagSlug(tag) === slug);
    if (match) return match;
  }
  return slug;
}

/**
 * URL of a tag's counterpart in the other language. Tries the explicit
 * translation dictionary first, then an exact slug match, and finally falls
 * back to that language's tags index so the link is never broken.
 */
export async function counterpartTagUrl(slug: string, other: Lang): Promise<string> {
  const posts = await getPosts(other);
  const has = (s: string) => posts.some((post) => post.data.tags.some((tag) => tagSlug(tag) === s));
  const mapped = translateSlug(slug, other, tagMap);
  if (mapped && has(mapped)) return tagUrl(other, mapped);
  if (has(slug)) return tagUrl(other, slug);
  return localizePath('/tags/', other);
}

/** All unique categories across a language's posts, with their posts (newest first). */
export async function getCategories(lang: Lang): Promise<Map<string, Post[]>> {
  const posts = await getPosts(lang);
  const map = new Map<string, Post[]>();
  for (const post of posts) {
    for (const category of post.data.categories) {
      const key = tagSlug(category);
      const list = map.get(key) ?? [];
      list.push(post);
      map.set(key, list);
    }
  }
  return map;
}

/**
 * URL of a category's counterpart in the other language. Same strategy as tags:
 * dictionary lookup, then exact slug, then the categories index fallback.
 */
export async function counterpartCategoryUrl(slug: string, other: Lang): Promise<string> {
  const posts = await getPosts(other);
  const has = (s: string) =>
    posts.some((post) => post.data.categories.some((c) => tagSlug(c) === s));
  const mapped = translateSlug(slug, other, categoryMap);
  if (mapped && has(mapped)) return categoryUrl(other, mapped);
  if (has(slug)) return categoryUrl(other, slug);
  return localizePath('/categories/', other);
}

/** URL of a post's counterpart in the other language (falls back to home). */
export async function counterpartPostUrl(post: Post, other: Lang): Promise<string> {
  const matches = await getCollection('post', ({ data }) => {
    return data.lang === other && data.translationKey === post.data.translationKey;
  });
  const target = matches[0];
  if (!target) return homeUrl(other);
  return postUrl(other, target.data.date.getFullYear(), target.data.slug);
}

/** URL of a chapter's counterpart in the other language (falls back to book landing). */
export async function counterpartChapterUrl(
  chapter: Book,
  other: Lang,
  bookKey = 'the-augmented-designer'
): Promise<string> {
  const entries = await getBookEntries(bookKey);
  const matches = entries.filter((entry) => {
    return (
      entry.data.lang === other &&
      !entry.data.isIndex &&
      entry.data.translationKey === chapter.data.translationKey
    );
  });
  const target = matches[0];
  if (!target) return bookUrlByKey(other, bookKey);
  return chapterUrlByKey(other, bookKey, target.data.slug);
}
