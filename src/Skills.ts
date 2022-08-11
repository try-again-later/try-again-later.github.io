import Technology from './Technology';

export const MAX_SKILL_LEVEL = 5;

export type Skill = {
  technology: string;
  level: number;
  icon?: string;
};

const frontendSkills: Skill[] = [
  {
    technology: 'CSS (Vanilla / Bootstrap / SCSS / Tailwind)',
    level: 4,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    technology: 'Javascript / Typescript',
    level: 4,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    technology: 'React',
    level: 2,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    technology: 'Vue',
    level: 2,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  },
  {
    technology: 'Alpine.js',
    level: 2,
  },
];

const backendSkills: Skill[] = [
  {
    technology: 'PHP',
    level: 3,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    technology: 'SQL (PostgreSQL)',
    level: 3,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    technology: 'Twig templates',
    level: 2,
  },
  {
    technology: 'Laravel',
    level: 1,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
  },
];

const miscSkills: Skill[] = [
  {
    technology: 'Docker',
    level: 1,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    technology: 'Nginx',
    level: 1,
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  },
];

export { frontendSkills, backendSkills, miscSkills };
