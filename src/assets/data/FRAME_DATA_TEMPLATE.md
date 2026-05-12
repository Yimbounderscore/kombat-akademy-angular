# Frame Data Update Guide

## Data Export Date
The `move_list.json` and `move_list_kameo.json` files were last exported on **November 19, 2024**.  
All patches after that date changed frame data values and added new moves.

## Patches After 11/19/2024

| Date | Content |
|---|---|
| 9/24/2024 | Cyrax, Sektor, Noob Saibot added. Havik got new moves (Nether Snatcher, etc.) |
| 10/10/2024 | Geras got Enhanced History Lesson/Follow-Up Exam, Li Mei got Rising Sun |
| 11/19/2024 | Ghostface added. JSON data exported. |
| 1/21/2025 | Conan added. Kitana/Raiden/Reiko got new moves. Rain got new normals. |
| 3/18/2025 | T-1000 + Madam Bo added. Baraka/G.Shao/Kenshi got new moves. |
| 4/1/2025 | Balance changes across many characters |
| 5/14/2025 | More balance changes |

## Characters with NO frame data
These need complete move lists created from scratch:
- **Conan** (conan-the-barbarian) - added 1/21/2025
- **T-1000** (t-1000) - added 3/18/2025

## New moves added after 11/19/2024
These need JSON entries with frame data filled in:

### Ashrah
- Hold LT after Enhanced Specials to change Heaven/Hell Modes

### Baraka (3/18/2025)
- Desperate Tarkatan (install super)
- Heel Smite (hold Heel Drop)

### General Shao (3/18/2025)
- Smoldering Wrath

### Geras (10/10/2024)
- Enhanced History Lesson (hits ducking, more damage)
- Enhanced Follow-Up Exam (hits ducking, more damage)

### Havik (9/24/2024)
- Nether Snatcher
- Enhanced Nether Snatcher
- (Air) Nether Stomp
- (Air) Enhanced Nether Stomp
- Enhanced Corpse Taunt

### Kenshi (3/18/2025)
- Soul Exit

### Kitana (1/21/2025)
- (Air) Enhanced Fan Toss
- (Air) Reverse Fan Toss
- (Air) Enhanced Reverse Fan Toss
- Wind Bomb Squall

### Li Mei (7/24/2024)
- Rising Sun (Away + Back Punch, Back Kick)

### Quan Chi (7/23/2024)
- Zone of Waste
- Best Foot Backward (Down + Towards + Back Kick)
- Enhanced Field of Bones (damage over time)

### Raiden (1/21/2025)
- Electric Overcharge
- Electric Discharge

### Rain (9/24/2024)
- Shipwrecker (Towards + Front Punch)
- Puddle Step (Away + Front Kick)
- Kraken Killer (Towards + Front Punch, Back Punch)
- Surface Breacher (Away + Front Kick, Back Kick)
- Acid Spit Ball (hold 1 during Acid Spit)

### Reiko (1/21/2025)
- (Air) Reap The Whirlwind
- (Air) Enhanced Reap The Whirlwind

### Reptile (9/24/2024)
- Acid Spit Ball (hold Front Punch during Acid Spit)
- Killer Kick (1,1,4) can cancel into (Air) Falling Fangs
- Kroco-Die-Le (4) first hit more hit advantage

### Scorpion (9/24/2024)
- Fire Pillar Thrust (F+3,4)
- Rope Spin now overhead, 23f startup (was mid, 20f)
- Enhanced Rope Spin costs 2 bars, -5 on block (was -25)

### Kameo: Jax (Kameo)
- Gotcha Grab (new move)

### Kameo: Kung Lao (Kameo)
- Orbiting Hat
- Wobbly Hat

### Kameo: Sonya (Kameo)
- (Air) Ricochet Dive Kick
- (Air) Bicycle Kick follow-up

### Kameo: Sub-Zero (Kameo)
- Deep Freeze
- Iceball Special

### Kameo: Scorpion (Kameo)
- Aura of Flame (Hold Kameo during Fire Breath)

### Kameo: Shujinko (Kameo)
- Kingdoms Krumble
- Waterfall Chop
- Various new Kopy Kat/Mimic abilities for all characters

### Kameo: Frost (Kameo)
- Ice Wall (D+K)

### Kameo: Khameleon (Kameo)
- Alternate Disguises

### Kameo: Sektor (Kameo)
- Alternate Fatal Blow attack (R1 during startup)
- Activate Homing now fires 2 missiles

## Sub-Zero changes (all post-11/19/2024)
- Heavy Toe (4): +2 frames hit advantage
- Spinal Tap (B+2): cancels 1f earlier, +1 active on second hit
- Ice Klone: increased hit region, significantly increased in combos
- Deadly Vapors: no longer enables autoblock first time in combo
- Enhanced Ice Klone: 1 bar for 1 Klone (lasts longer), 2 bars for 3 Klones
- Reduced combo damage scaling after freeze (5/14/2025)

## Frame data format (single move JSON entry)
```json
{
  "id": "1000",
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

Existing IDs go up to ~948. Start new entries at 1000+.

## How to contribute
1. Fill in JSON entries for any of the new moves or changed values above
2. You can provide data for one character at a time or batch them
3. Send the JSON back to me and I'll merge it into the data files
