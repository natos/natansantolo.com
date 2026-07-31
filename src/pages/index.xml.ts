import type { APIContext } from 'astro';
import { buildFeed } from '../lib/rss';

// Alias of /rss.xml at Hugo's original feed URL for subscriber continuity.
export const GET = (context: APIContext) => buildFeed('en', context);
