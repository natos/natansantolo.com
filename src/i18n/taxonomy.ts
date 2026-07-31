import type { Lang } from './index';

/**
 * Explicit EN -> ES slug maps for translated taxonomy terms, enabling precise
 * 1:1 language switching between tag/category pages. Terms that are identical
 * across languages (e.g. "chatgpt", "iso-9241-210", "coaching", "fusecon",
 * "design-thinking") are omitted — the exact-slug match handles those.
 *
 * Keys/values are the slugified forms produced by `tagSlug()`.
 */
export const tagMap: Record<string, string> = {
  'ai-collaboration': 'colaboracion-con-ia',
  'performance-art': 'arte-performatico',
  'augmented-artist': 'artista-aumentado',
  'thai-dance': 'danza-tailandesa',
  'human-ai-partnership': 'alianza-humano-ia',
  'singapore-arts-scene': 'escena-artistica-de-singapur',
  'cultural-design': 'diseno-cultural',
  'creative-technology': 'tecnologia-creativa',
  conferences: 'conferencias',
  ai: 'ia',
  'human-creativity': 'creatividad-humana',
  'design-community': 'comunidad-de-diseno',
  storytelling: 'narrativa',
  'critical-thinking': 'pensamiento-critico',
  originality: 'originalidad',
  'ux-design': 'diseno-de-ux',
  'thought-leadership': 'liderazgo-de-opinion',
  innovation: 'innovacion',
  'human-ai-collaboration': 'colaboracion-humano-ia',
  'professional-development': 'desarrollo-profesional',
  'ai-and-design': 'ia-y-diseno',
  'design-career': 'carrera-en-diseno',
  'context-of-use': 'contexto-de-uso',
  'user-experience-design': 'diseno-de-experiencia-de-usuario',
  'human-centered-design': 'diseno-centrado-en-las-personas',
};

export const categoryMap: Record<string, string> = {
  art: 'arte',
  conferences: 'conferencias',
  design: 'diseno',
};

/** Translate a taxonomy slug into the target language, or undefined if unmapped. */
export function translateSlug(
  slug: string,
  to: Lang,
  map: Record<string, string>,
): string | undefined {
  if (to === 'es') return map[slug];
  // to 'en': reverse lookup
  for (const [en, es] of Object.entries(map)) {
    if (es === slug) return en;
  }
  return undefined;
}
