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
    name: 'Starbucks Rewards Page',
    sourceCodeUrl: 'https://github.com/try-again-later/Starbucks-Rewards-Page',
    liveUrl: 'https://try-again-later.github.io/Starbucks-Rewards-Page',
    description: [
      'Копия страницы с сайта Старбакса, созданная с помощью Nuxt 3 и SCSS.',
      'Страница адаптирована как под декстоп, так и под мобильные экраны. Есть интерактивные элементы (бургерное меню на узких экранах, модалки, раскрывающиеся списки). На странице полностью работает клавиатурная навигация.',
    ],
    technologies: ['Vue', 'SCSS', 'Nuxt', 'Typescript'],
    screenshots: [
      '/screenshots/starbucks-rewards-page/1.png',
      '/screenshots/starbucks-rewards-page/2.png',
      '/screenshots/starbucks-rewards-page/3.png',
      '/screenshots/starbucks-rewards-page/4.png',
      '/screenshots/starbucks-rewards-page/5.png',
      '/screenshots/starbucks-rewards-page/6.png',
    ],
    wip: false,
  },
  {
    name: 'Movie Search App',
    sourceCodeUrl: 'https://github.com/try-again-later/Movie-Search-App',
    liveUrl: 'https://try-again-later.github.io/Movie-Search-App',
    description: [
      'Приложение для поиска фильмов через апи TMDB и сохранения их в список избранного, написанное на реакте.',
    ],
    technologies: ['Typescript', 'SCSS', 'React'],
    screenshots: [
      '/screenshots/movie-search-app/1.png',
      '/screenshots/movie-search-app/2.png',
      '/screenshots/movie-search-app/3.png',
      '/screenshots/movie-search-app/4.png',
    ],
    wip: false,
  },
  {
    name: 'Mines',
    sourceCodeUrl: 'https://github.com/try-again-later/Mines',
    liveUrl: 'https://try-again-later.github.io/Mines/',
    description: [
      'Классическая игра Сапёр, написанная на тайпскрипте.',
      'Левая кнопка мыши открывает клетки, правая кнопка мыши ставит флажок. Нажатие обеими кнопками мыши по клетке с цифрами открывает все соседние клетки, в которых нет мин (если проставлены все флаги).',
    ],
    technologies: ['Typescript'],
    screenshots: [
      '/screenshots/mines/1.png',
      '/screenshots/mines/2.png',
    ],
    wip: false,
  },
  {
    name: 'Todo App',
    sourceCodeUrl: 'https://github.com/try-again-later/Todo-App',
    liveUrl: 'https://tal-todo-app.duckdns.org/',
    description: [
      'Приложение для ведения списка дел, написанное на PHP (без фреймворка) с использованием Twig шаблонов вместе с Tailwind.',
      'Для входа можно использовать почту "user@example.com" и пароль "123123123", либо просто зарегистрировать новый аккаунт.',
    ],
    technologies: ['PHP', 'Twig', 'Tailwind'],
    screenshots: [
      '/screenshots/todo-app/1.png',
      '/screenshots/todo-app/2.png',
      '/screenshots/todo-app/3.png',
      '/screenshots/todo-app/4.png',
    ],
    wip: false,
  },
  {
    name: 'Voting App',
    sourceCodeUrl: 'https://github.com/try-again-later/Voting-App',
    liveUrl: 'https://tal-voting-app.duckdns.org/',
    description: [
      'Сайт для принятия фидбека / трекер заявок, написанный на Laravel и Livewire. Пользователи могут создавать топики и писать комментарии под ними. Админы могут обновлять статусы на топиках, уведомляя пользователей о статусах их заявок / предложений.',
      'Для входа можно использовать почту "admin@example.com" и пароль "123123123", либо просто зарегистрировать новый аккаунт.',
    ],
    technologies: ['PHP', 'Laravel', 'Livewire', 'Tailwind', 'Alpine.js'],
    screenshots: [
      '/screenshots/voting-app/1.png',
      '/screenshots/voting-app/2.png',
      '/screenshots/voting-app/3.png',
      '/screenshots/voting-app/4.png',
      '/screenshots/voting-app/5.png',
      '/screenshots/voting-app/6.png',
    ],
    wip: false,
  },
  {
    name: 'Interactive Product Page',
    sourceCodeUrl: 'https://github.com/try-again-later/Interactive-Product-Page',
    liveUrl: 'https://try-again-later.github.io/Interactive-Product-Page',
    description: [
      'Интерактивная страница товара из интернет-магазина, созданная с помощью TailwindCSS и AlpineJS.',
      'Кнопка покупки товара и поп-ап для корзины сделаны интерактивными. Страница адаптирована как под десктоп, так и под мобильные девайсы.',
    ],
    technologies: ['Tailwind', 'Alpine.js'],
    screenshots: [
      '/screenshots/interactive-product-page/4.png',
      '/screenshots/interactive-product-page/1.jpg',
      '/screenshots/interactive-product-page/2.jpg',
      '/screenshots/interactive-product-page/3.jpg',
    ],
    wip: false,
  },
  {
    name: 'Landing Page Practice',
    sourceCodeUrl: 'https://github.com/try-again-later/Landing-Page-Practice',
    liveUrl: 'https://try-again-later.github.io/Landing-Page-Practice',
    description: [
      'Простой проект, который я сделал, чтобы ознакомиться с фреймворком Bootstrap.',
      'Я также использовал шаблонизатор Pug, чтобы избежать написания повторяющегося HTML для нескольких экземпляров одного и того же компонента на странице. Я также использовал Express в качестве дев сервера.',
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
    name: 'Multi-Backed Enum',
    sourceCodeUrl: 'https://github.com/try-again-later/Multi-Backed-Enum',
    description: [
      'Небольшая PHP библиотека, позволяющая создавать перечисления, вариантам которых может соответствовать сразу несколько скалярных значений.',
      'Библиотека позволяет конвертировать скалярные значения в варианты перечисления и обратно. По сути это как "backed" перечисления из PHP 8.1, но с возможностью указать несколько значений для одного варианта.',
    ],
    technologies: ['PHP'],
    screenshots: [],
    wip: false,
  },
  {
    name: 'Pup',
    sourceCodeUrl: 'https://github.com/try-again-later/pup',
    description: [
      'PHP библиотека для валидации с интерфейсом, вдохновлённым yup. Позволяет парсить и создавать объекты из сырых массивов в соответствии с наобором правил, указанных в атрибутах на полях класса.',
    ],
    technologies: ['PHP'],
    screenshots: [],
    wip: false,
  },
];

export default projects;
