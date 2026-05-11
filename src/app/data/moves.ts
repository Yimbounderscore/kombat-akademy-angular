export interface Move {
  name: string;
  kommand: string;
  hitDamage: string;
  blockDamage: string;
  startup: string;
  active: string;
  recovery: string;
  cancel: string;
  hitAdvantage: string;
  blockAdvantage: string;
  category: string;
  blockType: string;
  property: string;
}

export const MOVES: { [characterSlug: string]: Move[] } = {
  'scorpion': [
    // Basic Attacks
    { name: 'Front Punch', kommand: '1', hitDamage: '2.00', blockDamage: '0.00', startup: '7', active: '2', recovery: '15', cancel: '17', hitAdvantage: '8', blockAdvantage: '-2', category: 'basic-attacks', blockType: 'high', property: '' },
    { name: 'Back Punch', kommand: '2', hitDamage: '3.00', blockDamage: '0.00', startup: '9', active: '3', recovery: '18', cancel: '20', hitAdvantage: '10', blockAdvantage: '-3', category: 'basic-attacks', blockType: 'high', property: '' },
    { name: 'Front Kick', kommand: '3', hitDamage: '5.00', blockDamage: '0.00', startup: '11', active: '4', recovery: '22', cancel: '24', hitAdvantage: '12', blockAdvantage: '-4', category: 'basic-attacks', blockType: 'high', property: '' },
    { name: 'Back Kick', kommand: '4', hitDamage: '7.00', blockDamage: '0.00', startup: '13', active: '5', recovery: '25', cancel: '27', hitAdvantage: '15', blockAdvantage: '-5', category: 'basic-attacks', blockType: 'high', property: '' },
    { name: 'Down Front Punch', kommand: 'D+1', hitDamage: '2.00', blockDamage: '0.00', startup: '6', active: '2', recovery: '12', cancel: '14', hitAdvantage: '5', blockAdvantage: '-2', category: 'basic-attacks', blockType: 'mid', property: '' },
    { name: 'Down Back Punch', kommand: 'D+2', hitDamage: '3.00', blockDamage: '0.00', startup: '8', active: '3', recovery: '15', cancel: '17', hitAdvantage: '8', blockAdvantage: '-3', category: 'basic-attacks', blockType: 'mid', property: '' },
    { name: 'Down Front Kick', kommand: 'D+3', hitDamage: '4.00', blockDamage: '0.00', startup: '10', active: '3', recovery: '18', cancel: '20', hitAdvantage: '10', blockAdvantage: '-4', category: 'basic-attacks', blockType: 'low', property: '' },
    { name: 'Down Back Kick', kommand: 'D+4', hitDamage: '5.00', blockDamage: '0.00', startup: '12', active: '4', recovery: '20', cancel: '22', hitAdvantage: '12', blockAdvantage: '-5', category: 'basic-attacks', blockType: 'low', property: '' },
    { name: 'Jump Punch', kommand: 'U+F+1', hitDamage: '4.00', blockDamage: '0.00', startup: '8', active: '4', recovery: '20', cancel: '22', hitAdvantage: '10', blockAdvantage: '-4', category: 'basic-attacks', blockType: 'overhead', property: '' },
    { name: 'Jump Kick', kommand: 'U+F+3', hitDamage: '6.00', blockDamage: '0.00', startup: '10', active: '5', recovery: '22', cancel: '24', hitAdvantage: '12', blockAdvantage: '-5', category: 'basic-attacks', blockType: 'overhead', property: '' },
    { name: 'Forward Throw', kommand: 'F+1+3', hitDamage: '10.00', blockDamage: '0.00', startup: '5', active: '2', recovery: '30', cancel: '32', hitAdvantage: '15', blockAdvantage: '0', category: 'basic-attacks', blockType: 'throw', property: '' },
    { name: 'Back Throw', kommand: 'B+1+3', hitDamage: '10.00', blockDamage: '0.00', startup: '5', active: '2', recovery: '30', cancel: '32', hitAdvantage: '15', blockAdvantage: '0', category: 'basic-attacks', blockType: 'throw', property: '' },
    // Special Moves
    { name: 'Spear', kommand: 'B,F,1', hitDamage: '8.00', blockDamage: '2.00', startup: '15', active: '3', recovery: '30', cancel: '32', hitAdvantage: '20', blockAdvantage: '-8', category: 'special-moves', blockType: 'high', property: '' },
    { name: 'Teleport Punch', kommand: 'B,F,2', hitDamage: '10.00', blockDamage: '3.00', startup: '18', active: '4', recovery: '35', cancel: '37', hitAdvantage: '25', blockAdvantage: '-10', category: 'special-moves', blockType: 'mid', property: '' },
    { name: 'Hellfire', kommand: 'D,B,1', hitDamage: '12.00', blockDamage: '4.00', startup: '20', active: '5', recovery: '40', cancel: '42', hitAdvantage: '30', blockAdvantage: '-12', category: 'special-moves', blockType: 'mid', property: '' },
    { name: 'Flame Breath', kommand: 'D,F,1', hitDamage: '9.00', blockDamage: '2.00', startup: '14', active: '3', recovery: '28', cancel: '30', hitAdvantage: '18', blockAdvantage: '-6', category: 'special-moves', blockType: 'high', property: '' },
    { name: 'Enhanced Spear', kommand: 'B,F,1+EX', hitDamage: '12.00', blockDamage: '3.00', startup: '15', active: '3', recovery: '30', cancel: '32', hitAdvantage: '25', blockAdvantage: '-8', category: 'special-moves', blockType: 'high', property: 'armor' },
    { name: 'Enhanced Teleport', kommand: 'B,F,2+EX', hitDamage: '15.00', blockDamage: '4.00', startup: '18', active: '4', recovery: '35', cancel: '37', hitAdvantage: '30', blockAdvantage: '-10', category: 'special-moves', blockType: 'mid', property: 'armor' },
    // Finishers
    { name: 'Fatal Blow', kommand: 'L1+R1', hitDamage: '30.00', blockDamage: '5.00', startup: '20', active: '5', recovery: '40', cancel: '42', hitAdvantage: '30', blockAdvantage: '-15', category: 'finishers', blockType: 'mid', property: 'armor' },
    { name: 'Fatality 1', kommand: 'D,F,D,F,1', hitDamage: '0.00', blockDamage: '0.00', startup: '0', active: '0', recovery: '0', cancel: '0', hitAdvantage: '0', blockAdvantage: '0', category: 'finishers', blockType: '', property: '' },
    { name: 'Brutality', kommand: 'D+2', hitDamage: '0.00', blockDamage: '0.00', startup: '0', active: '0', recovery: '0', cancel: '0', hitAdvantage: '0', blockAdvantage: '0', category: 'finishers', blockType: '', property: '' }
  ],
  'sub-zero': [
    // Basic Attacks
    { name: 'Front Punch', kommand: '1', hitDamage: '2.00', blockDamage: '0.00', startup: '7', active: '2', recovery: '15', cancel: '17', hitAdvantage: '8', blockAdvantage: '-2', category: 'basic-attacks', blockType: 'high', property: '' },
    { name: 'Back Punch', kommand: '2', hitDamage: '3.00', blockDamage: '0.00', startup: '9', active: '3', recovery: '18', cancel: '20', hitAdvantage: '10', blockAdvantage: '-3', category: 'basic-attacks', blockType: 'high', property: '' },
    { name: 'Front Kick', kommand: '3', hitDamage: '5.00', blockDamage: '0.00', startup: '11', active: '4', recovery: '22', cancel: '24', hitAdvantage: '12', blockAdvantage: '-4', category: 'basic-attacks', blockType: 'high', property: '' },
    { name: 'Back Kick', kommand: '4', hitDamage: '7.00', blockDamage: '0.00', startup: '13', active: '5', recovery: '25', cancel: '27', hitAdvantage: '15', blockAdvantage: '-5', category: 'basic-attacks', blockType: 'high', property: '' },
    { name: 'Down Front Punch', kommand: 'D+1', hitDamage: '2.00', blockDamage: '0.00', startup: '6', active: '2', recovery: '12', cancel: '14', hitAdvantage: '5', blockAdvantage: '-2', category: 'basic-attacks', blockType: 'mid', property: '' },
    { name: 'Down Back Punch', kommand: 'D+2', hitDamage: '3.00', blockDamage: '0.00', startup: '8', active: '3', recovery: '15', cancel: '17', hitAdvantage: '8', blockAdvantage: '-3', category: 'basic-attacks', blockType: 'mid', property: '' },
    { name: 'Down Front Kick', kommand: 'D+3', hitDamage: '4.00', blockDamage: '0.00', startup: '10', active: '3', recovery: '18', cancel: '20', hitAdvantage: '10', blockAdvantage: '-4', category: 'basic-attacks', blockType: 'low', property: '' },
    { name: 'Down Back Kick', kommand: 'D+4', hitDamage: '5.00', blockDamage: '0.00', startup: '12', active: '4', recovery: '20', cancel: '22', hitAdvantage: '12', blockAdvantage: '-5', category: 'basic-attacks', blockType: 'low', property: '' },
    // Special Moves
    { name: 'Ice Ball', kommand: 'D,B,1', hitDamage: '8.00', blockDamage: '2.00', startup: '15', active: '3', recovery: '30', cancel: '32', hitAdvantage: '20', blockAdvantage: '-8', category: 'special-moves', blockType: 'high', property: '' },
    { name: 'Ice Clone', kommand: 'D,B,2', hitDamage: '0.00', blockDamage: '0.00', startup: '10', active: '0', recovery: '20', cancel: '22', hitAdvantage: '0', blockAdvantage: '0', category: 'special-moves', blockType: '', property: '' },
    { name: 'Slide', kommand: 'B,F,3', hitDamage: '10.00', blockDamage: '3.00', startup: '12', active: '4', recovery: '28', cancel: '30', hitAdvantage: '15', blockAdvantage: '-8', category: 'special-moves', blockType: 'low', property: '' },
    { name: 'Enhanced Ice Ball', kommand: 'D,B,1+EX', hitDamage: '12.00', blockDamage: '3.00', startup: '15', active: '3', recovery: '30', cancel: '32', hitAdvantage: '25', blockAdvantage: '-8', category: 'special-moves', blockType: 'high', property: 'armor' },
    // Finishers
    { name: 'Fatal Blow', kommand: 'L1+R1', hitDamage: '30.00', blockDamage: '5.00', startup: '20', active: '5', recovery: '40', cancel: '42', hitAdvantage: '30', blockAdvantage: '-15', category: 'finishers', blockType: 'mid', property: 'armor' },
    { name: 'Fatality 1', kommand: 'D,F,D,F,1', hitDamage: '0.00', blockDamage: '0.00', startup: '0', active: '0', recovery: '0', cancel: '0', hitAdvantage: '0', blockAdvantage: '0', category: 'finishers', blockType: '', property: '' }
  ]
};

export const getMovesForCharacter = (slug: string): Move[] => {
  return MOVES[slug] || [];
};

export const getMovesByCategory = (slug: string, category: string): Move[] => {
  const moves = getMovesForCharacter(slug);
  return moves.filter(move => move.category === category);
};
