import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

// 1200x630 Open Graph / Twitter social banner.
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#141414"/>
      <stop offset="100%" stop-color="#232323"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="16" height="630" fill="#e8a13a"/>
  <text x="80" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="92" font-weight="700" fill="#ffffff">Natan Santolo</text>
  <text x="82" y="320" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-style="italic" fill="#e8a13a">Free-range Design Leader</text>
  <line x1="82" y1="372" x2="520" y2="372" stroke="#3a3a3a" stroke-width="2"/>
  <text x="82" y="430" font-family="Georgia, 'Times New Roman', serif" font-size="30" fill="#cfcfcf">Author of “The Augmented Designer”</text>
  <text x="82" y="474" font-family="Georgia, 'Times New Roman', serif" font-size="26" fill="#8a8a8a">Design, AI, and the future of creative work</text>
  <text x="80" y="566" font-family="Georgia, 'Times New Roman', serif" font-size="26" font-weight="700" fill="#e8a13a">natansantolo.com</text>
</svg>`;

const out = 'static/assets/og-banner.png';
const buf = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, buf);
console.log(`Wrote ${out} (${buf.length} bytes)`);
