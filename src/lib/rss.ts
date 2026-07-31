import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts, postYear } from './content';
import { postUrl, ui, type Lang } from '../i18n';

/** Build the RSS feed for a language. Shared by /rss.xml and /index.xml routes. */
export async function buildFeed(lang: Lang, context: APIContext) {
  const posts = await getPosts(lang);
  return rss({
    title: 'Natan Santolo',
    description: ui[lang]['site.description'],
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.date,
      link: postUrl(lang, postYear(post), post.data.slug),
    })),
  });
}
