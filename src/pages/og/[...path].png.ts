import type { APIRoute, GetStaticPaths } from 'astro';
import { getPosts, postYear, readingTime } from '../../lib/content';
import { renderOgImage } from '../../lib/og';
import type { Lang } from '../../i18n';

export const getStaticPaths: GetStaticPaths = async () => {
  const langs: Lang[] = ['en', 'es'];
  const paths: { params: { path: string }; props: { title: string; meta: string } }[] = [];

  for (const lang of langs) {
    const posts = await getPosts(lang);
    for (const post of posts) {
      const year = postYear(post);
      const minutes = readingTime(post);
      const readLabel = lang === 'es' ? 'min de lectura' : 'min read';
      const date = post.data.date.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
      paths.push({
        params: { path: `${lang}/${year}/${post.data.slug}` },
        props: { title: post.data.title, meta: `${minutes} ${readLabel} · ${date}` },
      });
    }
  }

  return paths;
};

export const GET: APIRoute = async ({ props }) => {
  const { title, meta } = props as { title: string; meta: string };
  const png = await renderOgImage({ title, meta });
  return new Response(new Uint8Array(png), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
