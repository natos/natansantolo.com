import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

/** Resolve a file inside node_modules relative to the project root. */
function pkg(path: string): Buffer {
  return readFileSync(join(process.cwd(), 'node_modules', path));
}

// Load once per build.
const fonts = [
  {
    name: 'Merriweather',
    data: pkg('@fontsource/merriweather/files/merriweather-latin-400-normal.woff'),
    weight: 400 as const,
    style: 'normal' as const,
  },
  {
    name: 'Merriweather',
    data: pkg('@fontsource/merriweather/files/merriweather-latin-900-normal.woff'),
    weight: 900 as const,
    style: 'normal' as const,
  },
  {
    name: 'Merriweather Sans',
    data: pkg('@fontsource/merriweather-sans/files/merriweather-sans-latin-700-normal.woff'),
    weight: 700 as const,
    style: 'normal' as const,
  },
];

export interface OgOptions {
  title: string;
  /** Small eyebrow line above the title (e.g. reading time or section). */
  meta?: string;
}

/** Render a 1200×630 branded Open Graph PNG for a page title. */
export async function renderOgImage({ title, meta }: OgOptions): Promise<Buffer> {
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#faf7f0',
          padding: '72px 80px',
          fontFamily: 'Merriweather Sans',
        },
        children: [
          // Top: brand + amber rule
          {
            type: 'div',
            props: {
              style: { display: 'flex', flexDirection: 'column' },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '64px',
                      height: '8px',
                      backgroundColor: '#e8a13a',
                      borderRadius: '4px',
                      marginBottom: '28px',
                    },
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      fontSize: '26px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#8a7f6a',
                    },
                    children: 'natansantolo.com',
                  },
                },
              ],
            },
          },
          // Title
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                fontFamily: 'Merriweather',
                fontWeight: 900,
                fontSize: title.length > 70 ? '58px' : '72px',
                lineHeight: 1.12,
                color: '#1a1a1a',
                letterSpacing: '-0.01em',
              },
              children: title,
            },
          },
          // Footer meta
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                fontSize: '26px',
                color: '#6b6252',
              },
              children: meta ?? 'Natan Santolo — Free-range Design Leader',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );

  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
  return Buffer.from(resvg.render().asPng());
}
