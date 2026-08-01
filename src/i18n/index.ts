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
  booksHub: { en: 'books', es: 'libros' },
} as const;

export const books = {
  'the-augmented-designer': { en: 'the-augmented-designer', es: 'el-disenador-aumentado' },
  'the-augmented-team': { en: 'the-augmented-team', es: 'el-equipo-aumentado' },
} as const;

export type BookKey = keyof typeof books;

// UI chrome strings.
export const ui = {
  en: {
    'site.description': 'Free-range Design Leader',
    'nav.home': 'natansantolo.com',
    'nav.articles': 'Writing',
    'nav.book': 'Books',
    'nav.bookTeam': 'The Augmented Team',
    'nav.bookDesigner': 'The Augmented Designer',
    'nav.booksAll': 'View all books',
    'nav.categories': 'Categories',
    'home.articles': 'Articles',
    'hero.lead':
      'I help teams design better products and I write about how design and AI work together.',
    'hero.ctaBook': 'Read The Augmented Team',
    'hero.ctaBookTeam': 'Read The Augmented Designer',
    'hero.ctaWriting': 'Browse writing',
    'home.aboutEyebrow': 'About',
    'home.writingEyebrow': 'Writing',
    'home.writingTitle': 'Latest articles',
    'home.viewAll': 'View all',
    'home.bookEyebrow': 'The Book',
    'home.bookTitle': 'The Augmented Team',
    'home.bookText':
      'A continuation focused on team transformation: coaching, infrastructure, and organizational scale.',
    'home.bookCta': 'Explore the new book',
    'home.bookTeamTitle': 'The Augmented Designer',
    'home.bookTeamText':
      'A field guide for designers who want to understand how AI can amplify their work — not replace it.',
    'home.bookTeamCta': 'Explore the first book',
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
    'book.prev': 'Previous',
    'book.next': 'Next',
    'tags.more': 'more articles about',
    'lang.switch': 'Español',
  },
  es: {
    'site.description': 'Líder de Diseño en libertad',
    'nav.home': 'natansantolo.com',
    'nav.articles': 'Escritos',
    'nav.book': 'Libros',
    'nav.bookTeam': 'El Equipo Aumentado',
    'nav.bookDesigner': 'El Diseñador Aumentado',
    'nav.booksAll': 'Ver todos los libros',
    'nav.categories': 'Categorías',
    'home.articles': 'Artículos',
    'hero.lead':
      'Ayudo a los equipos a diseñar mejores productos y escribo sobre cómo el diseño y la IA trabajan juntos.',
    'hero.ctaBook': 'Leer El Equipo Aumentado',
    'hero.ctaBookTeam': 'Leer El Diseñador Aumentado',
    'hero.ctaWriting': 'Ver escritos',
    'home.aboutEyebrow': 'Sobre mí',
    'home.writingEyebrow': 'Escritos',
    'home.writingTitle': 'Últimos artículos',
    'home.viewAll': 'Ver todo',
    'home.bookEyebrow': 'El Libro',
    'home.bookTitle': 'El Equipo Aumentado',
    'home.bookText':
      'Una continuación enfocada en transformación de equipos: coaching, infraestructura y escala organizacional.',
    'home.bookCta': 'Explorar el libro nuevo',
    'home.bookTeamTitle': 'El Diseñador Aumentado',
    'home.bookTeamText':
      'Una guía práctica para diseñadores que quieren entender cómo la IA puede amplificar su trabajo — no reemplazarlo.',
    'home.bookTeamCta': 'Explorar el primer libro',
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
    'book.prev': 'Anterior',
    'book.next': 'Siguiente',
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
  return bookUrlByKey(lang, 'the-augmented-designer');
}

/** Build a book chapter URL for a given language. */
export function chapterUrl(lang: Lang, slug: string): string {
  return chapterUrlByKey(lang, 'the-augmented-designer', slug);
}

/** Build the book landing URL for a specific book key and language. */
export function bookUrlByKey(lang: Lang, bookKey: BookKey | string): string {
  const key = bookKey as BookKey;
  const segment = books[key]?.[lang] ?? bookKey;
  return localizePath(`/${segment}/`, lang);
}

/** Build a chapter URL for a specific book key and language. */
export function chapterUrlByKey(lang: Lang, bookKey: BookKey | string, slug: string): string {
  const key = bookKey as BookKey;
  const segment = books[key]?.[lang] ?? bookKey;
  return localizePath(`/${segment}/${slug}/`, lang);
}

/** Build the books hub URL for a given language. */
export function booksHubUrl(lang: Lang): string {
  return localizePath(`/${sections.booksHub[lang]}/`, lang);
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
