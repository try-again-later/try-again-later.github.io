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
    icon: '/icons/css.svg',
  },
  {
    technology: 'Javascript / Typescript',
    level: 4,
    icon: '/icons/javascript.svg',
  },
  {
    technology: 'Vue',
    level: 3,
    icon: '/icons/vuejs.svg',
  },
  {
    technology: 'React',
    level: 2,
    icon: '/icons/react.svg',
  },
];

const backendSkills: Skill[] = [
  {
    technology: 'PHP',
    level: 4,
    icon: '/icons/php.svg',
  },
  {
    technology: 'Laravel',
    level: 3,
    icon: '/icons/laravel.svg',
  },
  {
    technology: 'SQL (PostgreSQL)',
    level: 3,
    icon: '/icons/postgresql.svg',
  },
];

const miscSkills: Skill[] = [
  {
    technology: 'Docker',
    level: 2,
    icon: '/icons/docker.svg',
  },
];

export { frontendSkills, backendSkills, miscSkills };
