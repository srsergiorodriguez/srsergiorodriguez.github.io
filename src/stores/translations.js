import { readable, writable, derived } from 'svelte/store';

const translations = {
  // ESPAÑOL
  es: {
    filters: "filtros",
    date: "fecha",
    language: "idioma",
    topic: "tema",
    all: "todo",
    type: "tipo",
    chapter: "capítulo",
    article: "artículo",
    reset: "resetear",
    download: "descargar",
    academic: 'Académico',
    academicPublications: 'Publicaciones académicas',
    coding: 'Código + Arte',
    libraries: 'Librerías',
    software: 'Software',
    videogames: 'Videojuegos',
    elit: 'Literatura electrónica',
    explorables: 'Ensayos interactivos',
    comics: 'Cómics',
    compilations: 'Compilaciones',
    zines: 'Zines',
    cv: 'Hoja de vida',
    portfolio: 'Portafolio'
  },
  // ENGLISH
  en: {
    filters: "filters",
    date: "date",
    language: "language",
    topic: "topic",
    all: "all",
    type: "tipo",
    chapter: "chapter",
    article: "article",
    reset: "reset",
    download: "download",
    academic: 'Academic',
    academicPublications: 'Academic publications',
    coding: 'Creative Coding',
    libraries: 'Libraries',
    software: 'Software',
    videogames: 'Videogames',
    elit: 'Electronic literature',
    explorables: 'Interactive Essays',
    comics: 'Comics',
    compilations: 'Compilations',
    zines: 'Zines',
    cv: 'CV',
    portfolio: 'Portfolio'
  }
}

export const lang = writable("es");
export const t = derived(lang, $lang => translations[$lang]);
export const langs = readable(Object.keys(translations));