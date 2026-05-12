# Frame Data Template for New Characters & Moves
Add new entries to `src/assets/data/move_list.json` using this exact JSON format:

## Template: Single Move Entry
```json
{
  "id": "UNIQUE_ID",
  "char_name": "CharacterName",
  "category": "Basic Attacks|Special Moves|Finishers",
  "subcategory": "Normal Attacks|Throws|Kameo Fatality|etc",
  "parent_command": "",
  "move_name": "Move Name Here",
  "command": "F+2,1",
  "hit_damage": "100.00",
  "block_damage": "25.000",
  "fblock_damage": "0.00000",
  "block_type": "High|Mid|Low|Overhead|Throw|Unblockable",
  "startup": "10",
  "active": "3",
  "recovery": "15",
  "cancel": "0",
  "hit_advantage": "5",
  "block_advantage": "-3",
  "fblock_advantage": "-3",
  "properties": "Armor|Invulnerability|Buff|",
  "notes": "Any special notes about the move"
}
```

## Current JSON ID range
The existing data ends at ID ~948. Start new entries at ID 1000.

## Characters needing data
These characters exist in the roster but have NO frame data in move_list.json:

### Conan (slug: conan-the-barbarian)
New character added in patch 1/21/2025. Needs full move list.

### T-1000 (slug: t-1000)
New character added in patch 3/18/2025. Needs full move list.

## Existing characters with new moves from patches
These moves were added in patches and need entries:

### Kitana (from 1/21/2025)
- (Air) Enhanced Fan Toss
- (Air) Reverse Fan Toss  
- (Air) Enhanced Reverse Fan Toss
- Wind Bomb Squall

### Raiden (from 1/21/2025)
- Electric Overcharge
- Electric Discharge

### Reiko (from 1/21/2025)
- (Air) Reap The Whirlwind
- (Air) Enhanced Reap The Whirlwind

### Baraka (from 3/18/2025)
- Desperate Tarkatan (install super)

### General Shao (from 3/18/2025)
- Smoldering Wrath

### Kenshi (from 3/18/2025)
- Soul Exit

## To add data
1. Fill in JSON entries following the template above
2. Send me the file back
3. I'll merge it into move_list.json and update the website
