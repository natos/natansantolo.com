import { readFileSync, existsSync, statSync } from 'node:fs';
import { globSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';

const DIST = 'dist';

// Collect all HTML files.
const htmlFiles = execSync(`find ${DIST} -name '*.html'`, { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(Boolean);

const problems = [];
const shortcodeLeaks = [];
const draftLeaks = [];

/** Resolve a site-absolute URL path to a file on disk, honoring directory URLs. */
function resolvePath(urlPath) {
  let p = urlPath.split('#')[0].split('?')[0];
  if (!p.startsWith('/')) return null; // skip relative (none expected)
  const base = join(DIST, p);
  if (existsSync(base) && statSync(base).isFile()) return base;
  // directory URL -> index.html
  const idx = join(base, 'index.html');
  if (existsSync(idx)) return idx;
  // maybe missing trailing slash
  const idx2 = join(DIST, p + '/index.html');
  if (existsSync(idx2)) return idx2;
  return null;
}

const attrRe = /(?:href|src)="([^"]+)"/g;
const hreflangRe = /hreflang="([^"]+)"\s+href="([^"]+)"/g;

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const rel = file.replace(`${DIST}/`, '');

  if (html.includes('{{<') || html.includes('{{%')) shortcodeLeaks.push(rel);

  let m;
  while ((m = attrRe.exec(html))) {
    const url = m[1];
    if (
      url.startsWith('http://') ||
      url.startsWith('https://') ||
      url.startsWith('//') ||
      url.startsWith('mailto:') ||
      url.startsWith('data:') ||
      url.startsWith('#') ||
      url.startsWith('tel:')
    ) {
      continue;
    }
    if (!resolvePath(url)) {
      problems.push({ file: rel, url });
    }
  }

  // hreflang targets are absolute URLs; check their path resolves.
  while ((m = hreflangRe.exec(html))) {
    const href = m[2];
    try {
      const u = new URL(href);
      if (u.hostname.includes('natansantolo.com') && !resolvePath(u.pathname)) {
        problems.push({ file: rel, url: `[hreflang] ${href}` });
      }
    } catch {
      /* ignore */
    }
  }
}

console.log(`Scanned ${htmlFiles.length} HTML files.`);
console.log(`\nBroken internal links/assets: ${problems.length}`);
for (const p of problems) console.log(`  ${p.file}  ->  ${p.url}`);

console.log(`\nHugo shortcode leaks: ${shortcodeLeaks.length}`);
for (const f of shortcodeLeaks) console.log(`  ${f}`);

if (problems.length === 0 && shortcodeLeaks.length === 0) {
  console.log('\nAll internal links, assets, and hreflang targets resolve. No shortcode leaks.');
}
