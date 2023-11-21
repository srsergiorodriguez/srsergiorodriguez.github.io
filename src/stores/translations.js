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
    code: 'Código + Arte',
    libraries: 'Librerías',
    software: 'Software',
    videogames: 'Videojuegos',
    elit: 'Literatura electrónica',
    collections: 'Colecciones',
    explorables: 'Ensayos interactivos',
    comics: 'Cómics',
    compilations: 'Compilaciones',
    zines: 'Zines',
    cv: 'Hoja de vida',
    portfolio: 'Portafolio',
    academicIntro: "Mis intereses académicos se mueven por lugares que conectan <strong>la tecnología, la ciencia y el arte</strong>. Así, trabajo en proyectos que exploran las <strong>humanidades digitales</strong> —usando tecnologías digitales para estudiar temas humanísticos o estudiando lo digital como fenómeno cultural—, que parten de una <strong>aproximación semiótica</strong> para entender las formas del sentido artístico y la investigación científica —como el uso de imágenes como ejercicio de pensamiento en las teorías cibernéticas, o la investigación desde la biosemiótica y la semiótica cognitiva de procesos interpretativos—, o que usan el <strong>arte como estrategia de exploración intelectual o expresiva</strong> —la literatura electrónica, la programación creativa, y los cómics—.",
    codingIntro: "Por una parte, construyo <strong>herramientas que facilitan el ejercicio de la creatividad desde la computación</strong>, como software para la manipulación de imágenes y sonido y para la escritura de literatura generativa e hipertextual. Adicionalmente, uso <strong>código para la producción de ensayos y piezas académicas interactivas, videojuegos y obras de arte</strong>.<br/><br/>También coordino el <a href='https://rchd.com.co/club_programacion/' target='_blank'>club de programación</a> de la Red Colombiana de Humanidades Digitales.",
    comicsIntro: "<strong>Los cómics son un arte integral: hay que dibujar, narrar, diseñar, diagramar, hacer uso de símbolos y referentes culturales</strong>. Tengo la fortuna de hacer parte del colectivo comiquero <a href='https://4mesas.github.io/' target='_blank'>4mesas</a>, que piensa y crea cómics colaborando y apoyando los proyectos individuales de sus integrantes."
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
    code: 'Code + Art',
    libraries: 'Libraries',
    software: 'Software',
    videogames: 'Videogames',
    elit: 'Electronic literature',
    collections: 'Collections',
    explorables: 'Interactive Essays',
    comics: 'Comics',
    compilations: 'Compilations',
    zines: 'Zines',
    cv: 'CV',
    portfolio: 'Portfolio',
    academicIntro: "My academic interests relate <strong>technology, science and art</strong>. My research explores <strong>digital humanities</strong> —using digital tools to study humanistic topics or studying the digital as a cultural phenomenon—, uses <strong>semiotics as a theoretical scaffolding</strong> for understanding artistic thinking and scientific research —like the use of images as mechanisms of inquiry in cybernetics, or my research on biosemiotics and cognitive semiotics on interpretation—, or uses <strong>art as a strategy for creative and intellectual exploration</strong> —from practices like electronic literature, creative coding, and comics—.",
    codingIntro: "I'm interested in producing <strong>tools that facilitate the excercise of creativitiy by using computation</strong>. I have written programming libraries and software for image and sound manipulation, and for creating generative and hypertextual literature. Also, I use <strong>code to create interactive essays and explorable explanations, videogames and artworks</strong>.",
    comicsIntro: "<strong>Comics are an integral art: they combine drawings, narrations, design, simbols and cultural references</strong>. I have been fortunate to be part of a the comic book artists collective <a href='https://4mesas.github.io/' target='_blank'>4mesas</a>, a community that thinks about and creates comics in colaboration and supports the individual projects of its members."
  }
}

export const lang = writable("es");
export const t = derived(lang, $lang => translations[$lang]);
export const langs = readable(Object.keys(translations));