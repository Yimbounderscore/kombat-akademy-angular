export interface Kameo {
  name: string;
  slug: string;
  type: string;
  description: string;
  color: string;
  colorDark: string;
  health: number;
}

export const KAMEOS: { [key: string]: Kameo } = {
  'Cyrax': {
    name: 'Cyrax',
    slug: 'cyrax',
    type: 'Rushdown',
    description: 'A cybernetic ninja with net and bomb attacks.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 300
  },
  'Darrius': {
    name: 'Darrius',
    slug: 'darrius',
    type: 'Rushdown',
    description: 'A resistance fighter from Orderrealm.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 350
  },
  'Ferra': {
    name: 'Ferra',
    slug: 'ferra',
    type: 'Rushdown',
    description: 'A small but fierce rider from Outworld.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 350
  },
  'Frost': {
    name: 'Frost',
    slug: 'frost',
    type: 'Rushdown',
    description: 'A Lin Kuei warrior with ice powers.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 300
  },
  'Goro': {
    name: 'Goro',
    slug: 'goro',
    type: 'Rushdown',
    description: 'The four-armed Shokan prince.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 250
  },
  'Janet Cage': {
    name: 'Janet Cage',
    slug: 'janet-cage',
    type: 'Rushdown',
    description: 'An alternate version of Johnny Cage.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 300
  },
  'Jax': {
    name: 'Jax',
    slug: 'jax',
    type: 'Rushdown',
    description: 'A Special Forces major with cybernetic arms.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 400
  },
  'Kano': {
    name: 'Kano',
    slug: 'kano',
    type: 'Rushdown',
    description: 'A Black Dragon mercenary with a cybernetic eye.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 250
  },
  'Khameleon': {
    name: 'Khameleon',
    slug: 'khameleon',
    type: 'Rushdown',
    description: 'A Zaterran shapeshifter.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 250
  },
  'Kung Lao': {
    name: 'Kung Lao',
    slug: 'kung-lao',
    type: 'Rushdown',
    description: 'A Shaolin monk with a razor-edged hat.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 300
  },
  'Mavado': {
    name: 'Mavado',
    slug: 'mavado',
    type: 'Rushdown',
    description: 'A Red Dragon clan leader.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 250
  },
  'Motaro': {
    name: 'Motaro',
    slug: 'motaro',
    type: 'Rushdown',
    description: 'A centaur from Outworld.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 250
  },
  'Sareena': {
    name: 'Sareena',
    slug: 'sareena',
    type: 'Rushdown',
    description: 'A demoness from the Netherrealm.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 350
  },
  'Scorpion': {
    name: 'Scorpion',
    slug: 'scorpion',
    type: 'Rushdown',
    description: 'A specter with hellfire abilities.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 300
  },
  'Sektor': {
    name: 'Sektor',
    slug: 'sektor',
    type: 'Rushdown',
    description: 'A cyborg ninja with missile attacks.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 300
  },
  'Shujinko': {
    name: 'Shujinko',
    slug: 'shujinko',
    type: 'Rushdown',
    description: 'An elderly warrior who can copy moves.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 400
  },
  'Sonya': {
    name: 'Sonya',
    slug: 'sonya',
    type: 'Rushdown',
    description: 'A Special Forces commander.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 300
  },
  'Stryker': {
    name: 'Stryker',
    slug: 'stryker',
    type: 'Rushdown',
    description: 'A riot control officer from Earthrealm.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 250
  },
  'Sub-Zero': {
    name: 'Sub-Zero',
    slug: 'sub-zero',
    type: 'Rushdown',
    description: 'The Grandmaster of the Lin Kuei.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 350
  },
  'Tremor': {
    name: 'Tremor',
    slug: 'tremor',
    type: 'Rushdown',
    description: 'A Black Dragon member with earth powers.',
    color: 'rgb(255, 140, 0)',
    colorDark: 'rgb(95, 60, 0)',
    health: 400
  }
};

export const KAMEO_LIST = Object.values(KAMEOS);
