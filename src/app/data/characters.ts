export interface Character {
  name: string;
  slug: string;
  type: string;
  description: string;
  color: string;
  colorDark: string;
  health: number;
  pros: string[];
  cons: string[];
  stats: {
    offense: number;
    defense: number;
    damage: number;
    mobility: number;
    range: number;
    zoning: number;
  };
}

export const CHARACTERS: { [key: string]: Character } = {
  'Ashrah': {
    name: 'Ashrah',
    slug: 'ashrah',
    type: 'Footsie',
    description: 'A former demoness seeking redemption through purification.',
    color: 'rgb(224, 224, 224)',
    colorDark: 'rgb(112, 112, 112)',
    health: 700,
    pros: ['Good range', 'Strong normals'],
    cons: ['Limited mobility'],
    stats: {
      offense: 4,
      defense: 4,
      damage: 4,
      mobility: 3,
      range: 4,
      zoning: 3
    }
  },
  'Baraka': {
    name: 'Baraka',
    slug: 'baraka',
    type: 'Footsie',
    description: 'A fierce Tarkatan warrior with blade-like arms.',
    color: 'rgb(255, 160, 96)',
    colorDark: 'rgb(128, 80, 48)',
    health: 700,
    pros: ['High damage', 'Good range'],
    cons: ['Slower attacks'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 4,
      mobility: 3,
      range: 4,
      zoning: 3
    }
  },
  'Cyrax': {
    name: 'Cyrax',
    slug: 'cyrax',
    type: 'Setplay',
    description: 'A cybernetic ninja specializing in traps and gadgets.',
    color: 'rgb(255, 192, 0)',
    colorDark: 'rgb(128, 96, 0)',
    health: 700,
    pros: ['Good setups', 'Strong zoning'],
    cons: ['Complex execution'],
    stats: {
      offense: 3,
      defense: 3,
      damage: 3,
      mobility: 2,
      range: 4,
      zoning: 4
    }
  },
  'Ermac': {
    name: 'Ermac',
    slug: 'ermac',
    type: 'Rushdown',
    description: 'A fusion of souls granted power by Shang Tsung.',
    color: 'rgb(64, 128, 0)',
    colorDark: 'rgb(32, 64, 0)',
    health: 700,
    pros: ['Telekinesis', 'Strong mixups'],
    cons: ['Lower health'],
    stats: {
      offense: 5,
      defense: 3,
      damage: 3,
      mobility: 4,
      range: 3,
      zoning: 2
    }
  },
  'General Shao': {
    name: 'General Shao',
    slug: 'general-shao',
    type: 'Footsie',
    description: 'The mighty Kahn of Outworld, wielding immense power.',
    color: 'rgb(255, 32, 32)',
    colorDark: 'rgb(128, 16, 16)',
    health: 800,
    pros: ['High health', 'Long range'],
    cons: ['Slower attacks'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 4,
      mobility: 3,
      range: 5,
      zoning: 1
    }
  },
  'Geras': {
    name: 'Geras',
    slug: 'geras',
    type: 'Grappler',
    description: 'A servant of Kronika with control over time.',
    color: 'rgb(224, 128, 64)',
    colorDark: 'rgb(112, 64, 32)',
    health: 650,
    pros: ['Strong grabs', 'Time manipulation'],
    cons: ['Slower movement'],
    stats: {
      offense: 4,
      defense: 2,
      damage: 3,
      mobility: 3,
      range: 4,
      zoning: 3
    }
  },
  'Ghostface': {
    name: 'Ghostface',
    slug: 'ghostface',
    type: 'Rushdown',
    description: 'The mysterious killer from the Scream franchise.',
    color: 'rgb(128, 128, 128)',
    colorDark: 'rgb(64, 64, 64)',
    health: 700,
    pros: ['Fast attacks', 'Good mixups'],
    cons: ['Lower damage'],
    stats: {
      offense: 4,
      defense: 2,
      damage: 3,
      mobility: 4,
      range: 3,
      zoning: 2
    }
  },
  'Havik': {
    name: 'Havik',
    slug: 'havik',
    type: 'Footsie',
    description: 'A chaos cleric from the Chaosrealm.',
    color: 'rgb(160, 0, 32)',
    colorDark: 'rgb(80, 0, 16)',
    health: 800,
    pros: ['High health', 'Good damage'],
    cons: ['Slower attacks'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 5,
      mobility: 2,
      range: 3,
      zoning: 3
    }
  },
  'Homelander': {
    name: 'Homelander',
    slug: 'homelander',
    type: 'Grappler',
    description: 'The powerful superhero from The Boys.',
    color: 'rgb(0, 64, 128)',
    colorDark: 'rgb(0, 32, 64)',
    health: 700,
    pros: ['High damage', 'Good mobility'],
    cons: ['Complex combos'],
    stats: {
      offense: 5,
      defense: 3,
      damage: 4,
      mobility: 4,
      range: 4,
      zoning: 4
    }
  },
  'Johnny Cage': {
    name: 'Johnny Cage',
    slug: 'johnny-cage',
    type: 'Rushdown',
    description: 'A Hollywood action star with martial arts skills.',
    color: 'rgb(32, 96, 96)',
    colorDark: 'rgb(16, 48, 48)',
    health: 650,
    pros: ['Fast attacks', 'Strong pressure'],
    cons: ['Lower health'],
    stats: {
      offense: 5,
      defense: 5,
      damage: 4,
      mobility: 4,
      range: 2,
      zoning: 1
    }
  },
  'Kenshi': {
    name: 'Kenshi',
    slug: 'kenshi',
    type: 'Rushdown',
    description: 'A blind swordsman with telekinetic abilities.',
    color: 'rgb(192, 0, 0)',
    colorDark: 'rgb(96, 0, 0)',
    health: 700,
    pros: ['Long range', 'High damage'],
    cons: ['Requires precision'],
    stats: {
      offense: 5,
      defense: 2,
      damage: 5,
      mobility: 4,
      range: 4,
      zoning: 3
    }
  },
  'Kitana': {
    name: 'Kitana',
    slug: 'kitana',
    type: 'Zoner',
    description: 'Princess of Edenia wielding deadly war fans.',
    color: 'rgb(0, 128, 255)',
    colorDark: 'rgb(0, 64, 128)',
    health: 700,
    pros: ['Good zoning', 'Strong projectiles'],
    cons: ['Lower damage up close'],
    stats: {
      offense: 3,
      defense: 3,
      damage: 3,
      mobility: 3,
      range: 4,
      zoning: 4
    }
  },
  'Kung Lao': {
    name: 'Kung Lao',
    slug: 'kung-lao',
    type: 'Balanced',
    description: 'A Shaolin monk with a razor-edged hat.',
    color: 'rgb(96, 96, 96)',
    colorDark: 'rgb(48, 48, 48)',
    health: 700,
    pros: ['Balanced stats', 'Good mobility'],
    cons: ['No standout strengths'],
    stats: {
      offense: 4,
      defense: 4,
      damage: 4,
      mobility: 3,
      range: 3,
      zoning: 3
    }
  },
  'Li Mei': {
    name: 'Li Mei',
    slug: 'li-mei',
    type: 'Balanced',
    description: 'A warrior from Outworld seeking justice.',
    color: 'rgb(255, 64, 128)',
    colorDark: 'rgb(128, 32, 64)',
    health: 700,
    pros: ['Good defense', 'Strong normals'],
    cons: ['Limited range'],
    stats: {
      offense: 2,
      defense: 4,
      damage: 3,
      mobility: 3,
      range: 1,
      zoning: 3
    }
  },
  'Liu Kang': {
    name: 'Liu Kang',
    slug: 'liu-kang',
    type: 'Balanced',
    description: 'The champion of Mortal Kombat and protector of Earthrealm.',
    color: 'rgb(224, 0, 0)',
    colorDark: 'rgb(112, 0, 0)',
    health: 700,
    pros: ['Well-rounded', 'Strong fireballs'],
    cons: ['No major weaknesses'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 4,
      mobility: 3,
      range: 3,
      zoning: 4
    }
  },
  'Mileena': {
    name: 'Mileena',
    slug: 'mileena',
    type: 'Rushdown',
    description: 'A clone of Kitana with Tarkatan features.',
    color: 'rgb(224, 32, 96)',
    colorDark: 'rgb(112, 16, 48)',
    health: 700,
    pros: ['Fast attacks', 'Good mixups'],
    cons: ['Lower health'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 4,
      mobility: 3,
      range: 3,
      zoning: 3
    }
  },
  'Nitara': {
    name: 'Nitara',
    slug: 'nitara',
    type: 'Rushdown',
    description: 'A vampire from the Netherrealm.',
    color: 'rgb(128, 0, 0)',
    colorDark: 'rgb(64, 0, 0)',
    health: 600,
    pros: ['High mobility', 'Good damage'],
    cons: ['Low health'],
    stats: {
      offense: 3,
      defense: 3,
      damage: 4,
      mobility: 5,
      range: 3,
      zoning: 1
    }
  },
  'Noob Saibot': {
    name: 'Noob Saibot',
    slug: 'noob-saibot',
    type: 'Setplay',
    description: 'A wraith from the Netherrealm, formerly Sub-Zero.',
    color: 'rgb(8, 8, 8)',
    colorDark: 'rgb(0, 0, 0)',
    health: 700,
    pros: ['Good setups', 'Strong combos'],
    cons: ['Complex execution'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 4,
      mobility: 3,
      range: 4,
      zoning: 3
    }
  },
  'Omni-Man': {
    name: 'Omni-Man',
    slug: 'omni-man',
    type: 'Balanced',
    description: 'The powerful Viltrumite from Invincible.',
    color: 'rgb(224, 0, 0)',
    colorDark: 'rgb(112, 0, 0)',
    health: 700,
    pros: ['High damage', 'Good range'],
    cons: ['Slower attacks'],
    stats: {
      offense: 3,
      defense: 3,
      damage: 4,
      mobility: 4,
      range: 4,
      zoning: 1
    }
  },
  'Peacemaker': {
    name: 'Peacemaker',
    slug: 'peacemaker',
    type: 'Zoner',
    description: 'A vigilante who believes in peace at any cost.',
    color: 'rgb(224, 0, 0)',
    colorDark: 'rgb(112, 0, 0)',
    health: 650,
    pros: ['Strong zoning', 'Good projectiles'],
    cons: ['Lower health'],
    stats: {
      offense: 4,
      defense: 5,
      damage: 3,
      mobility: 4,
      range: 3,
      zoning: 5
    }
  },
  'Quan Chi': {
    name: 'Quan Chi',
    slug: 'quan-chi',
    type: 'Zoner',
    description: 'A powerful sorcerer from the Netherrealm.',
    color: 'rgb(224, 224, 224)',
    colorDark: 'rgb(112, 112, 112)',
    health: 600,
    pros: ['Strong zoning', 'Good setups'],
    cons: ['Low health'],
    stats: {
      offense: 4,
      defense: 2,
      damage: 3,
      mobility: 3,
      range: 3,
      zoning: 5
    }
  },
  'Raiden': {
    name: 'Raiden',
    slug: 'raiden',
    type: 'Balanced',
    description: 'The God of Thunder and protector of Earthrealm.',
    color: 'rgb(128, 192, 255)',
    colorDark: 'rgb(64, 96, 128)',
    health: 700,
    pros: ['Good projectiles', 'Strong normals'],
    cons: ['No major strengths'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 3,
      mobility: 4,
      range: 3,
      zoning: 3
    }
  },
  'Rain': {
    name: 'Rain',
    slug: 'rain',
    type: 'Setplay',
    description: 'A demigod with control over water.',
    color: 'rgb(96, 64, 255)',
    colorDark: 'rgb(48, 32, 128)',
    health: 700,
    pros: ['Good setups', 'Strong zoning'],
    cons: ['Complex execution'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 3,
      mobility: 3,
      range: 3,
      zoning: 3
    }
  },
  'Reiko': {
    name: 'Reiko',
    slug: 'reiko',
    type: 'Balanced',
    description: 'A general in Shao Kahn\'s army.',
    color: 'rgb(160, 0, 0)',
    colorDark: 'rgb(80, 0, 0)',
    health: 700,
    pros: ['Long range', 'Strong normals'],
    cons: ['Slower attacks'],
    stats: {
      offense: 5,
      defense: 3,
      damage: 3,
      mobility: 3,
      range: 5,
      zoning: 4
    }
  },
  'Reptile': {
    name: 'Reptile',
    slug: 'reptile',
    type: 'Footsie',
    description: 'A reptilian creature with stealth abilities.',
    color: 'rgb(64, 128, 0)',
    colorDark: 'rgb(32, 64, 0)',
    health: 700,
    pros: ['Good mobility', 'Strong mixups'],
    cons: ['Lower damage'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 3,
      mobility: 3,
      range: 4,
      zoning: 2
    }
  },
  'Scorpion': {
    name: 'Scorpion',
    slug: 'scorpion',
    type: 'Rushdown',
    description: 'A specter seeking vengeance for his family.',
    color: 'rgb(255, 128, 0)',
    colorDark: 'rgb(128, 64, 0)',
    health: 700,
    pros: ['High damage', 'Long range attacks'],
    cons: ['Weak offense'],
    stats: {
      offense: 2,
      defense: 3,
      damage: 4,
      mobility: 4,
      range: 5,
      zoning: 2
    }
  },
  'Sektor': {
    name: 'Sektor',
    slug: 'sektor',
    type: 'Zoner',
    description: 'A cyborg ninja with missile attacks.',
    color: 'rgb(224, 0, 0)',
    colorDark: 'rgb(112, 0, 0)',
    health: 700,
    pros: ['Strong zoning', 'Good projectiles'],
    cons: ['Slower movement'],
    stats: {
      offense: 3,
      defense: 3,
      damage: 3,
      mobility: 2,
      range: 4,
      zoning: 4
    }
  },
  'Shang Tsung': {
    name: 'Shang Tsung',
    slug: 'shang-tsung',
    type: 'Zoner',
    description: 'A sorcerer who can steal souls and morph into others.',
    color: 'rgb(255, 192, 0)',
    colorDark: 'rgb(128, 96, 0)',
    health: 700,
    pros: ['Soul steal', 'Morph ability'],
    cons: ['Complex execution'],
    stats: {
      offense: 3,
      defense: 3,
      damage: 3,
      mobility: 3,
      range: 3,
      zoning: 4
    }
  },
  'Sindel': {
    name: 'Sindel',
    slug: 'sindel',
    type: 'Zoner',
    description: 'The Queen of Edenia with sonic scream abilities.',
    color: 'rgb(64, 32, 224)',
    colorDark: 'rgb(32, 16, 112)',
    health: 700,
    pros: ['Strong zoning', 'Good mobility'],
    cons: ['Lower health'],
    stats: {
      offense: 5,
      defense: 4,
      damage: 3,
      mobility: 4,
      range: 4,
      zoning: 4
    }
  },
  'Smoke': {
    name: 'Smoke',
    slug: 'smoke',
    type: 'Rushdown',
    description: 'A Lin Kuei warrior with smoke teleportation.',
    color: 'rgb(128, 128, 128)',
    colorDark: 'rgb(64, 64, 64)',
    health: 700,
    pros: ['Teleport', 'Fast attacks'],
    cons: ['Lower defense'],
    stats: {
      offense: 4,
      defense: 2,
      damage: 4,
      mobility: 3,
      range: 3,
      zoning: 1
    }
  },
  'Sub-Zero': {
    name: 'Sub-Zero',
    slug: 'sub-zero',
    type: 'Zoner',
    description: 'The Grandmaster of the Lin Kuei with ice powers.',
    color: 'rgb(0, 64, 128)',
    colorDark: 'rgb(0, 32, 64)',
    health: 700,
    pros: ['Strong defense', 'Good projectiles'],
    cons: ['Slower attacks'],
    stats: {
      offense: 2,
      defense: 5,
      damage: 3,
      mobility: 3,
      range: 3,
      zoning: 4
    }
  },
  'Takeda': {
    name: 'Takeda',
    slug: 'takeda',
    type: 'Setplay',
    description: 'A Shirai Ryu ninja and student of Scorpion.',
    color: 'rgb(128, 128, 128)',
    colorDark: 'rgb(64, 64, 64)',
    health: 700,
    pros: ['Long range', 'Good setups'],
    cons: ['Complex execution'],
    stats: {
      offense: 3,
      defense: 2,
      damage: 4,
      mobility: 3,
      range: 5,
      zoning: 3
    }
  },
  'Tanya': {
    name: 'Tanya',
    slug: 'tanya',
    type: 'Footsie',
    description: 'A Edenian traitor serving Outworld.',
    color: 'rgb(224, 160, 0)',
    colorDark: 'rgb(112, 80, 0)',
    health: 700,
    pros: ['Good range', 'Strong normals'],
    cons: ['Slower attacks'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 3,
      mobility: 3,
      range: 4,
      zoning: 3
    }
  },
  'Conan': {
    name: 'Conan',
    slug: 'conan-the-barbarian',
    type: 'Brawler',
    description: 'A Cimmerian barbarian from the Hyborian Age, wielding his might and blade.',
    color: 'rgb(160, 80, 40)',
    colorDark: 'rgb(80, 40, 20)',
    health: 800,
    pros: ['High health', 'Strong damage'],
    cons: ['Slower movement'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 4,
      mobility: 3,
      range: 3,
      zoning: 2
    }
  },
  'T-1000': {
    name: 'T-1000',
    slug: 't-1000',
    type: 'Balanced',
    description: 'A shapeshifting liquid metal assassin from the future.',
    color: 'rgb(192, 192, 255)',
    colorDark: 'rgb(96, 96, 128)',
    health: 650,
    pros: ['Good mixups', 'Shapeshifting abilities'],
    cons: ['Lower health'],
    stats: {
      offense: 4,
      defense: 3,
      damage: 3,
      mobility: 4,
      range: 3,
      zoning: 3
    }
  }
};

export const CHARACTER_LIST = Object.values(CHARACTERS);
