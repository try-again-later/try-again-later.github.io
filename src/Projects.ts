import type { Technology } from './Technology';

export type ProjectInfo = {
  name: string;
  sourceCodeUrl: string;
  liveUrl?: string;
  description: string[];
  technologies: Technology[];
  screenshots: string[];
  wip: boolean;
};

const projects: ProjectInfo[] = [
  {
    name: 'A videos convert app',
    sourceCodeUrl: 'https://github.com/try-again-later/Media-Convert-App',
    description: [
      'A website for resizing videos.',
      'MinIO is used to store videos, RabbitMQ is for distributing the workload among the workers converting videos using FFmpeg.',
      'Ratchet is used to update the user on the video conversion progress in real-time.'
    ],
    technologies: [
      'PHP',
      'Ratchet',
      'ReactPHP',
      'Tailwind',
      'Vue',
      'Docker',
      'RabbitMQ',
      'MinIO',
      'FFmpeg',
      'MongoDB',
    ],
    screenshots: ['/screenshots/media-convert-app/1.png'],
    wip: true,
  },
  {
    name: 'A ToDo app written in PHP without using any "big" frameworks',
    sourceCodeUrl: 'https://github.com/try-again-later/Todo-App',
    liveUrl: 'https://tal-todo-app.herokuapp.com',
    description: [
      'The only third-party dependencies are Twig templates and a DotEnv package. There is obviously no point in avoiding frameworks, I did this project just for learning purposes.',
      'It also utilizes my other project: a validation library called "pup".',
      'I\'ve also "dockerized" the app so that it could be run just by typing a couple of shell commands.',
    ],
    technologies: ['PHP', 'Postgres', 'Twig', 'Tailwind', 'Docker', 'Nginx'],
    screenshots: [
      '/screenshots/todo-app/1.png',
      '/screenshots/todo-app/2.png',
      '/screenshots/todo-app/3.png',
      '/screenshots/todo-app/4.png',
    ],
    wip: false,
  },
  {
    name: 'A voting app made with Laravel',
    sourceCodeUrl: 'https://github.com/try-again-later/Voting-App',
    liveUrl: 'https://tal-voting-app.herokuapp.com',
    description: [
      'Basically an issue tracker. Users can submit their requests for features, bug reports or some questions about the product. Meanwhile the product owners update the users on when the requested feature is implemented or a bug is fixed.',
      'Use email "admin@example.com" and password "123123123" to login or just register a new account',
    ],
    technologies: ['PHP', 'Laravel', 'Livewire', 'Tailwind', 'Alpine.js'],
    screenshots: [
      '/screenshots/voting-app/1.png',
      '/screenshots/voting-app/2.png',
      '/screenshots/voting-app/3.png',
    ],
    wip: false,
  },
  {
    name: 'A page with the list of my projects',
    sourceCodeUrl: 'https://github.com/try-again-later/try-again-later.github.io',
    liveUrl: 'https://try-again-later.github.io',
    description: ['A list of my projects.'],
    technologies: ['Tailwind', 'Typescript', 'Vue', 'Pinia'],
    screenshots: [
      '/screenshots/try-again-later.github.io/1.jpg',
      '/screenshots/try-again-later.github.io/2.jpg',
    ],
    wip: false,
  },
  {
    name: '"pup" PHP library',
    sourceCodeUrl: 'https://github.com/try-again-later/pup',
    description: [
      'A PHP library for parsing and validation inspired by yup. Apart from builder-like syntax allows you to define the object "schema" with PHP 8 attributes. See the github repo for usage examples.',
    ],
    technologies: ['PHP'],
    screenshots: [],
    wip: false,
  },
  {
    name: '"Multi-backed enum" PHP library',
    sourceCodeUrl: 'https://github.com/try-again-later/Multi-Backed-Enum',
    description: [
      'A small PHP library for creating enums with cases backed by multiple values. See the github repo for usage examples.',
    ],
    technologies: ['PHP'],
    screenshots: [],
    wip: false,
  },
  {
    name: 'Movie search app',
    sourceCodeUrl: 'https://github.com/try-again-later/Movie-Search-App',
    liveUrl: 'https://try-again-later.github.io/Movie-Search-App',
    description: [
      'A react app for searching movies and saving them to favorites. (Uses TMDB as the backend.)',
    ],
    technologies: ['Typescript', 'SCSS', 'React'],
    screenshots: [
      '/screenshots/movie-search-app/1.jpg',
      '/screenshots/movie-search-app/2.jpg',
      '/screenshots/movie-search-app/3.jpg',
    ],
    wip: false,
  },
  {
    name: 'Landing page',
    sourceCodeUrl: 'https://github.com/try-again-later/Landing-Page-Practice',
    liveUrl: 'https://try-again-later.github.io/Landing-Page-Practice',
    description: [
      'Just a random landing page to practice frontend. Pug templating language is used to separate markup into components.',
    ],
    technologies: ['Bootstrap', 'Pug'],
    screenshots: [
      '/screenshots/landing-page-practice/1.jpg',
      '/screenshots/landing-page-practice/2.jpg',
      '/screenshots/landing-page-practice/3.jpg',
    ],
    wip: false,
  },
  {
    name: 'Starbucks "Rewards" landing page',
    sourceCodeUrl: 'https://github.com/try-again-later/Starbucks-Rewards-Page',
    liveUrl: 'https://try-again-later.github.io/Starbucks-Rewards-Page',
    description: ['A copy of the Starbucks "Rewards" landing page made with vanilla CSS and JS.'],
    technologies: ['CSS', 'Javascript'],
    screenshots: [
      '/screenshots/starbucks-rewards-page/1.jpg',
      '/screenshots/starbucks-rewards-page/2.jpg',
      '/screenshots/starbucks-rewards-page/3.jpg',
    ],
    wip: false,
  },
  {
    name: 'Product interactive page',
    sourceCodeUrl: 'https://github.com/try-again-later/Interactive-Product-Page',
    liveUrl: 'https://try-again-later.github.io/Interactive-Product-Page',
    description: [
      'A product page for the ecommerce website made with Tailwind and Alpinejs framework. All the buttons are actually clickable.',
      'There is only a mobile version for now, but it is still usable on desktop.',
    ],
    technologies: ['Tailwind', 'Alpine.js'],
    screenshots: [
      '/screenshots/interactive-product-page/1.jpg',
      '/screenshots/interactive-product-page/2.jpg',
      '/screenshots/interactive-product-page/3.jpg',
    ],
    wip: true,
  },
];

export default projects;
