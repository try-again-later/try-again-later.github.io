export type Technology =
  | 'PHP'
  | 'React'
  | 'SCSS'
  | 'Typescript'
  | 'Javascript'
  | 'Bootstrap'
  | 'Tailwind'
  | 'Pug'
  | 'CSS'
  | 'Alpine.js'
  | 'Vue';

export type ProjectInfo = {
  name: string;
  sourceCodeUrl: string;
  liveUrl?: string;
  description: string;
  technologies: Technology[];
  screenshots: string[];
};

const projects: ProjectInfo[] = [
  {
    name: 'A page with the list of my projects',
    sourceCodeUrl: 'https://github.com/try-again-later/try-again-later.github.io',
    liveUrl: 'https://try-again-later.github.io',
    description: 'A list of my projects.',
    technologies: ['Tailwind', 'Typescript', 'Vue'],
    screenshots: [],
  },
  {
    name: '"pup" PHP library',
    sourceCodeUrl: 'https://github.com/try-again-later/pup',
    description:
      'A PHP library for parsing and validation inspired by yup. Apart from builder-like syntax allows you to define the object "schema" with PHP 8 attributes. See the github repo for usage examples.',
    technologies: ['PHP'],
    screenshots: [],
  },
  {
    name: '"Multi-backed enum" PHP library',
    sourceCodeUrl: 'https://github.com/try-again-later/MultiBackedEnum',
    description:
      'A small PHP library for creating enums with cases backed by multiple values. See the github repo for usage examples.',
    technologies: ['PHP'],
    screenshots: [],
  },
  {
    name: 'Movie search app',
    sourceCodeUrl: 'https://github.com/try-again-later/Movie-Search-App',
    liveUrl: 'https://try-again-later.github.io/Movie-Search-App',
    description:
      'A react app for searching movies and saving them to favorites. (Uses TMDB as the backend.)',
    technologies: ['Typescript', 'SCSS', 'React'],
    screenshots: [
      '/screenshots/movie-search-app/1.jpg',
      '/screenshots/movie-search-app/2.jpg',
      '/screenshots/movie-search-app/3.jpg',
    ],
  },
  {
    name: 'Landing page',
    sourceCodeUrl: 'https://github.com/try-again-later/Landing-Page-Practice',
    liveUrl: 'https://try-again-later.github.io/Landing-Page-Practice',
    description:
      'Just a random landing page to practice frontend. Pug templating language is used to separate markup into components.',
    technologies: ['Bootstrap', 'Pug'],
    screenshots: [
      '/screenshots/landing-page-practice/1.jpg',
      '/screenshots/landing-page-practice/2.jpg',
      '/screenshots/landing-page-practice/3.jpg',
    ],
  },
  {
    name: 'Starbucks "Rewards" landing page',
    sourceCodeUrl: 'https://github.com/try-again-later/Starbucks-Rewards-Page',
    liveUrl: 'https://try-again-later.github.io/Starbucks-Rewards-Page',
    description: 'A copy of the Starbucks "Rewards" landing page made with vanilla CSS and JS.',
    technologies: ['CSS', 'Javascript'],
    screenshots: [
      '/screenshots/starbucks-rewards-page/1.jpg',
      '/screenshots/starbucks-rewards-page/2.jpg',
      '/screenshots/starbucks-rewards-page/3.jpg',
    ],
  },
  {
    name: 'Product interactive page',
    sourceCodeUrl: 'https://github.com/try-again-later/Interactive-Product-Page',
    liveUrl: 'https://try-again-later.github.io/Interactive-Product-Page',
    description:
      'A product page for the ecommerce website made with Tailwind and Alpinejs framework. All the buttons are actually clickable.',
    technologies: ['Tailwind', 'Alpine.js'],
    screenshots: [
      '/screenshots/interactive-product-page/1.jpg',
      '/screenshots/interactive-product-page/2.jpg',
      '/screenshots/interactive-product-page/3.jpg',
    ],
  },
];

export default projects;
