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
  | 'Vue'
  | 'Pinia'
  | 'Twig'
  | 'Postgres'
  | 'Docker'
  | 'Nginx';

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
    name: 'A ToDo app written in PHP without using any "big" frameworks',
    sourceCodeUrl: 'https://github.com/try-again-later/Todo-App',
    liveUrl: 'https://tal-todo-app.herokuapp.com',
    description: 'The only third-party dependencies are Twig templates and a DotEnv package. There is obviously no point in avoiding frameworks, I did this project just for learning purposes. It also utilizes my other project: a validation library called "pup". I\'ve also "dockerized" the app so that it could be run just by typing a couple of shell commands.',
    technologies: ['PHP', 'Postgres', 'Twig', 'Tailwind', 'Docker', 'Nginx'],
    screenshots: [
      '/screenshots/todo-app/1.png',
      '/screenshots/todo-app/2.png',
      '/screenshots/todo-app/3.png',
      '/screenshots/todo-app/4.png',
    ],
  },
  {
    name: 'A page with the list of my projects',
    sourceCodeUrl: 'https://github.com/try-again-later/try-again-later.github.io',
    liveUrl: 'https://try-again-later.github.io',
    description: 'A list of my projects.',
    technologies: ['Tailwind', 'Typescript', 'Vue', 'Pinia'],
    screenshots: [
      '/screenshots/try-again-later.github.io/1.jpg',
      '/screenshots/try-again-later.github.io/2.jpg',
    ],
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
      'A product page for the ecommerce website made with Tailwind and Alpinejs framework. All the buttons are actually clickable. There is only a mobile version for now, but it still usable on desktop.',
    technologies: ['Tailwind', 'Alpine.js'],
    screenshots: [
      '/screenshots/interactive-product-page/1.jpg',
      '/screenshots/interactive-product-page/2.jpg',
      '/screenshots/interactive-product-page/3.jpg',
    ],
  },
];

export default projects;
