export interface Combo {
  id: number;
  character: string;
  kameo: string;
  category: string;
  inputs: string;
  damage: string;
  difficulty: string;
  meter: string;
  notes: string;
  url: string;
}

export const COMBOS: Combo[] = [
  // Scorpion Combos
  {
    id: 1,
    character: 'scorpion',
    kameo: '',
    category: 'midscreen',
    inputs: 'F+1, 2, 1+3',
    damage: '15.00',
    difficulty: 'Easy',
    meter: 'No',
    notes: 'Basic bread and butter combo',
    url: ''
  },
  {
    id: 2,
    character: 'scorpion',
    kameo: '',
    category: 'midscreen',
    inputs: 'B+1, 4, 2, 1+3',
    damage: '18.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Good damage starter',
    url: ''
  },
  {
    id: 3,
    character: 'scorpion',
    kameo: '',
    category: 'midscreen',
    inputs: 'F+1, 2, B+F, 1, 1+3',
    damage: '22.00',
    difficulty: 'Hard',
    meter: 'No',
    notes: 'Optimal midscreen combo',
    url: ''
  },
  {
    id: 4,
    character: 'scorpion',
    kameo: '',
    category: 'corner',
    inputs: 'F+1, 2, 1+3, 2',
    damage: '20.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Corner combo with extra hit',
    url: ''
  },
  {
    id: 5,
    character: 'scorpion',
    kameo: '',
    category: 'corner',
    inputs: 'B+1, 4, 2, B+F, 1, 1+3',
    damage: '25.00',
    difficulty: 'Hard',
    meter: 'No',
    notes: 'Optimal corner combo',
    url: ''
  },
  {
    id: 6,
    character: 'scorpion',
    kameo: 'ferra',
    category: 'midscreen',
    inputs: 'F+1, 2, 1+3, Kameo',
    damage: '22.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'With Ferra kameo extension',
    url: ''
  },
  {
    id: 7,
    character: 'scorpion',
    kameo: 'ferra',
    category: 'midscreen',
    inputs: 'B+1, 4, 2, Kameo, 1+3',
    damage: '26.00',
    difficulty: 'Hard',
    meter: 'No',
    notes: 'Optimal with Ferra',
    url: ''
  },
  {
    id: 8,
    character: 'scorpion',
    kameo: 'jax',
    category: 'midscreen',
    inputs: 'F+1, 2, 1+3, Kameo',
    damage: '24.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'With Jax kameo extension',
    url: ''
  },
  // Sub-Zero Combos
  {
    id: 9,
    character: 'sub-zero',
    kameo: '',
    category: 'midscreen',
    inputs: 'F+1, 2, 1+3',
    damage: '14.00',
    difficulty: 'Easy',
    meter: 'No',
    notes: 'Basic combo',
    url: ''
  },
  {
    id: 10,
    character: 'sub-zero',
    kameo: '',
    category: 'midscreen',
    inputs: 'B+1, 4, 2, 1+3',
    damage: '17.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Good damage',
    url: ''
  },
  {
    id: 11,
    character: 'sub-zero',
    kameo: '',
    category: 'midscreen',
    inputs: 'F+1, 2, D+B, 1, 1+3',
    damage: '20.00',
    difficulty: 'Hard',
    meter: 'No',
    notes: 'Optimal with Ice Ball',
    url: ''
  },
  {
    id: 12,
    character: 'sub-zero',
    kameo: '',
    category: 'corner',
    inputs: 'F+1, 2, 1+3, 2',
    damage: '18.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Corner combo',
    url: ''
  },
  {
    id: 13,
    character: 'sub-zero',
    kameo: 'ferra',
    category: 'midscreen',
    inputs: 'F+1, 2, 1+3, Kameo',
    damage: '21.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'With Ferra extension',
    url: ''
  },
  // Johnny Cage Combos
  {
    id: 14,
    character: 'johnny-cage',
    kameo: '',
    category: 'midscreen',
    inputs: 'F+1, 2, 1+3',
    damage: '16.00',
    difficulty: 'Easy',
    meter: 'No',
    notes: 'Basic combo',
    url: ''
  },
  {
    id: 15,
    character: 'johnny-cage',
    kameo: '',
    category: 'midscreen',
    inputs: 'B+1, 4, 2, 1+3',
    damage: '19.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Good damage',
    url: ''
  },
  {
    id: 16,
    character: 'johnny-cage',
    kameo: '',
    category: 'corner',
    inputs: 'F+1, 2, 1+3, 2',
    damage: '21.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Corner combo',
    url: ''
  },
  // Liu Kang Combos
  {
    id: 17,
    character: 'liu-kang',
    kameo: '',
    category: 'midscreen',
    inputs: 'F+1, 2, 1+3',
    damage: '15.00',
    difficulty: 'Easy',
    meter: 'No',
    notes: 'Basic combo',
    url: ''
  },
  {
    id: 18,
    character: 'liu-kang',
    kameo: '',
    category: 'midscreen',
    inputs: 'B+1, 4, 2, 1+3',
    damage: '18.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Good damage',
    url: ''
  },
  {
    id: 19,
    character: 'liu-kang',
    kameo: '',
    category: 'corner',
    inputs: 'F+1, 2, 1+3, 2',
    damage: '20.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Corner combo',
    url: ''
  },
  // Kitana Combos
  {
    id: 20,
    character: 'kitana',
    kameo: '',
    category: 'midscreen',
    inputs: 'F+1, 2, 1+3',
    damage: '14.00',
    difficulty: 'Easy',
    meter: 'No',
    notes: 'Basic combo',
    url: ''
  },
  {
    id: 21,
    character: 'kitana',
    kameo: '',
    category: 'midscreen',
    inputs: 'B+1, 4, 2, 1+3',
    damage: '17.00',
    difficulty: 'Medium',
    meter: 'No',
    notes: 'Good damage',
    url: ''
  }
];

export const getCombosForCharacter = (characterSlug: string, kameoSlug: string = ''): Combo[] => {
  return COMBOS.filter(combo => {
    const matchesCharacter = combo.character === characterSlug;
    const matchesKameo = !kameoSlug || combo.kameo === kameoSlug;
    return matchesCharacter && matchesKameo;
  });
};

export const getCombosByCategory = (characterSlug: string, category: string, kameoSlug: string = ''): Combo[] => {
  const combos = getCombosForCharacter(characterSlug, kameoSlug);
  return combos.filter(combo => combo.category === category);
};
