export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang = 'en';
export type Lang = keyof typeof languages;

// Localized path segments for each section. Option B: translated slugs.
export const sections = {
  post: { en: 'post', es: 'articulos' },
  book: { en: 'the-augmented-designer', es: 'el-disenador-aumentado' },
} as const;

// UI chrome strings.
export const ui = {
  en: {
    'site.description': 'Free-range Design Leader',
    'nav.home': 'natansantolo.com',
    'nav.articles': 'Writing',
    'nav.book': 'The Book',
    'nav.categories': 'Categories',
    'home.articles': 'Articles',
    'hero.lead':
      'I help teams design better products — and I write about how design and AI work together, without the hype.',
    'hero.ctaBook': 'Read the book',
    'hero.ctaWriting': 'Browse writing',
    'home.aboutEyebrow': 'About',
    'home.writingEyebrow': 'Writing',
    'home.writingTitle': 'Latest articles',
    'home.viewAll': 'View all',
    'home.bookEyebrow': 'The Book',
    'home.bookTitle': 'The Augmented Designer',
    'home.bookText':
      'A field guide for designers who want to understand how AI can amplify their work — not replace it.',
    'home.bookCta': 'Explore the book',
    'home.playEyebrow': 'Playground',
    'footer.tagline': 'Free-range Design Leader — writing about design, AI, and creative work.',
    'footer.explore': 'Explore',
    'footer.elsewhere': 'Elsewhere',
    'footer.rss': 'RSS feed',
    'footer.top': 'Back to top',
    'footer.rights': 'All rights reserved.',
    'arcade.text':
      '"Create what you wish existed." So I made this website where you can play snake with the arrow keys, enjoy!',
    'pagination.newer': 'Newer articles',
    'pagination.older': 'More articles',
    'post.prev': 'Prev article',
    'post.next': 'Next article',
    'book.chapters': 'Chapters',
    'book.toc': 'Show chapter index',
    'tags.more': 'more articles about',
    'lang.switch': 'Español',
  },
  es: {
    'site.description': 'Líder de Diseño en libertad',
    'nav.home': 'natansantolo.com',
    'nav.articles': 'Escritos',
    'nav.book': 'El Libro',
    'nav.categories': 'Categorías',
    'home.articles': 'Artículos',
    'hero.lead':
      'Ayudo a los equipos a diseñar mejores productos — y escribo sobre cómo el diseño y la IA trabajan juntos, sin la exageración.',
    'hero.ctaBook': 'Leer el libro',
    'hero.ctaWriting': 'Ver escritos',
    'home.aboutEyebrow': 'Sobre mí',
    'home.writingEyebrow': 'Escritos',
    'home.writingTitle': 'Últimos artículos',
    'home.viewAll': 'Ver todo',
    'home.bookEyebrow': 'El Libro',
    'home.bookTitle': 'El Diseñador Aumentado',
    'home.bookText':
      'Una guía práctica para diseñadores que quieren entender cómo la IA puede amplificar su trabajo — no reemplazarlo.',
    'home.bookCta': 'Explorar el libro',
    'home.playEyebrow': 'Zona de juego',
    'footer.tagline': 'Líder de Diseño en libertad — escribiendo sobre diseño, IA y trabajo creativo.',
    'footer.explore': 'Explorar',
    'footer.elsewhere': 'En otros sitios',
    'footer.rss': 'Fuente RSS',
    'footer.top': 'Volver arriba',
    'footer.rights': 'Todos los derechos reservados.',
    'arcade.text':
      '"Crea lo que desearías que existiera." Así que hice este sitio donde puedes jugar al snake con las flechas del teclado, ¡disfrútalo!',
    'pagination.newer': 'Artículos más recientes',
    'pagination.older': 'Más artículos',
    'post.prev': 'Artículo anterior',
    'post.next': 'Artículo siguiente',
    'book.chapters': 'Capítulos',
    'book.toc': 'Mostrar índice de capítulos',
    'tags.more': 'más artículos sobre',
    'lang.switch': 'English',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

/** Extract the current language from a URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in languages) return seg as Lang;
  return defaultLang;
}

/** Returns a translation function bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefix a path with the locale (no prefix for the default language). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/** Build a post URL for a given language. */
export function postUrl(lang: Lang, year: string | number, slug: string): string {
  return localizePath(`/${sections.post[lang]}/${year}/${slug}/`, lang);
}

/** Build the book landing URL for a given language. */
export function bookUrl(lang: Lang): string {
  return localizePath(`/${sections.book[lang]}/`, lang);
}

/** Build a book chapter URL for a given language. */
export function chapterUrl(lang: Lang, slug: string): string {
  return localizePath(`/${sections.book[lang]}/${slug}/`, lang);
}

/** Build the home URL for a given language. */
export function homeUrl(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

/** Build a tag URL for a given language. */
export function tagUrl(lang: Lang, tag: string): string {
  return localizePath(`/tags/${tag}/`, lang);
}

/** Build a category URL for a given language. */
export function categoryUrl(lang: Lang, category: string): string {
  return localizePath(`/categories/${category}/`, lang);
}
