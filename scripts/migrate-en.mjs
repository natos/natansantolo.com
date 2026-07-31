// One-time migration: Hugo content -> Astro per-locale collections (EN).
// Run: node scripts/migrate-en.mjs
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import toml from 'toml';

const ROOT = process.cwd();
const OUT_POST = path.join(ROOT, 'src/content/post/en');
const OUT_BOOK = path.join(ROOT, 'src/content/book/en');
fs.mkdirSync(OUT_POST, { recursive: true });
fs.mkdirSync(OUT_BOOK, { recursive: true });

const tomlEngine = { parse: toml.parse.bind(toml) };

function readMatter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  // gray-matter auto-detects --- (yaml). For +++ (toml) pass delimiters+engine.
  if (raw.startsWith('+++')) {
    return matter(raw, { delimiters: '+++', engines: { toml: tomlEngine }, language: 'toml' });
  }
  return matter(raw);
}

function toArray(v) {
  if (v == null) return [];
  return Array.isArray(v) ? v : [v];
}

function yamlEscape(s) {
  return String(s).replace(/"/g, '\\"');
}

function emit(fm, body) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fm)) {
    if (v === undefined) continue;
    if (Array.isArray(v)) {
      if (v.length === 0) { lines.push(`${k}: []`); continue; }
      lines.push(`${k}:`);
      for (const item of v) lines.push(`  - "${yamlEscape(item)}"`);
    } else if (typeof v === 'boolean' || typeof v === 'number') {
      lines.push(`${k}: ${v}`);
    } else {
      lines.push(`${k}: "${yamlEscape(v)}"`);
    }
  }
  lines.push('---', '');
  return lines.join('\n') + body.replace(/^\s+/, '\n');
}

function fmtDate(d) {
  if (!d) return undefined;
  const dt = new Date(d);
  if (isNaN(dt)) return String(d);
  return dt.toISOString().slice(0, 10);
}

// ---- Posts ----
const postDirs = ['content/post/2012', 'content/post/2013', 'content/post/2016', 'content/post/2025'];
let postCount = 0;
for (const dir of postDirs) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  const year = path.basename(dir);
  for (const name of fs.readdirSync(abs)) {
    if (!name.endsWith('.md')) continue;
    const { data, content } = readMatter(path.join(abs, name));
    const slug = data.slug || name.replace(/\.md$/, '');
    const fm = {
      title: data.title,
      description: data.description || data.summary || undefined,
      date: fmtDate(data.date) || `${year}-01-01`,
      tags: toArray(data.tags),
      categories: toArray(data.categories),
      slug,
      draft: data.draft === true,
      lang: 'en',
      translationKey: slug,
      href: data.href,
      image: data.image,
      caption: data.caption,
    };
    const outName = `${year}-${slug}.md`;
    fs.writeFileSync(path.join(OUT_POST, outName), emit(fm, content));
    postCount++;
  }
}

// ---- Book ----
let bookCount = 0;
const bookDir = path.join(ROOT, 'content/the-augmented-designer');
for (const name of fs.readdirSync(bookDir)) {
  if (!name.endsWith('.md')) continue;
  const { data, content } = readMatter(path.join(bookDir, name));
  const isIndex = name === '_index.md';
  const slug = isIndex ? '' : (data.slug || name.replace(/\.md$/, ''));
  const fm = {
    title: data.title,
    description: data.description || undefined,
    date: fmtDate(data.date),
    slug,
    weight: typeof data.weight === 'number' ? data.weight : 0,
    tags: toArray(data.tags),
    image: data.image,
    draft: data.draft === true,
    lang: 'en',
    isIndex,
    translationKey: isIndex ? '_index' : slug,
  };
  const outName = isIndex ? '_index.md' : name;
  fs.writeFileSync(path.join(OUT_BOOK, outName), emit(fm, content));
  bookCount++;
}

console.log(`Migrated ${postCount} posts and ${bookCount} book files to EN collections.`);
