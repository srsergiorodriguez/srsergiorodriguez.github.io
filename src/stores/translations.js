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
    portfolio: 'Portafolio',
    academicIntro: "Mis intereses académicos se mueven por lugares que conectan la tecnología, la ciencia y el arte. Así, trabajo en proyectos que exploran las humanidades digitales —sea usando tecnologías digitales para estudiar temas humanísticos o estudiando lo digital como fenómeno cultural—, que parten de un punto de vista semiótico para entender las formas de sentido artístico y la investigación científica —como la investigación que he hecho con respecto al uso de imágenes como ejercicio de pensamiento en las teorías cibernéticas, o la investigación desde la biosemiótica y la semiótica cognitiva de procesos interpretativos—, o que usan el arte como estrategia de exploración intelectual o expresiva —la literatura electrónica, la programación creativa y los cómics—.",
    codingIntro: "Por una parte, he trabajado en construir herramientas que facilitan el ejercicio de la creatividad desde la computación. He escrito software para la manipulación de imágenes y sonido y para la escritura de literatura generativa e hipertextual. Adicionalmente, me interesa el código para la producción de ensayos y piezas académicas interactivas, videojuegos y obras de arte.",
    comicsIntro: "Los cómics son un arte integral: hay que dibujar, narrar, diseñar, diagramar, hacer uso de símbolos y referentes culturales. Tengo la fortuna de hacer parte de un colectivo comiquero 4mesas, que piensa y crea cómics colaborando y apoyando los proyectos individuales de sus integrantes."
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
    portfolio: 'Portfolio',
    academicIntro: "My academic interests relate technology, science and art, mostly on topics related to digital technologies, semiotics, and artistic creativity. My research explores digital humanities —be it using digital tools to study humanistic topics or studying the digital as a cultural phenomenon—, uses semiotics as a scaffolding for understanding artistic thinking and scientific research —like my work on the use of images as mechanisms of inquiry in cybernetics, or my research on biosemiotics and cognitive semiotics on interpretation—, or uses art as a strategy for creative and intellectual exploration —from practices like electronic literature, creative coding, and cómics—.",
    codingIntro: "I'm interested in producing tools that facilitate the excercise of creativitiy by using computation. I have written programming libraries and software for image and sound manipulation, and for creating generative and hypertextual literature. Also, I'm interested in code as a way yo create interactive essays and explorable explanations, videogames and artworks.",
    comicsIntro: "Comics are an integral art: they combine drawings, narrations, design, simbols and cultural references. I have been fortunate to be part of a the comic book artists collective 4mesas, a community that thinks about and creates comics in colaboration and supports the individual projects of its members."
  }
}

export const lang = writable("es");
export const t = derived(lang, $lang => translations[$lang]);
export const langs = readable(Object.keys(translations));