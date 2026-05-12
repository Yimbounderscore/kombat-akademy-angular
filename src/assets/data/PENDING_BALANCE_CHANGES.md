# Pending Frame Data Updates

## Context
The `move_list.json` was exported on 11/19/2024. Multiple patches after that date changed frame data.
This file documents all pending balance changes that still need manual application.

## Characters needing COMPLETE move lists
These characters have NO entries in move_list.json:
- **Conan** (slug: conan-the-barbarian) — added 1/21/2025
- **T-1000** (slug: t-1000) — added 3/18/2025

Template at `src/assets/data/new_moves_template.json` has placeholders. Fill in TBD values.

## Already applied (do not redo)
| Move | Character | Change |
|---|---|---|
| Twisted Kyo (DB2) | Scorpion | block_type Mid→Overhead, startup 20→23 |
| Enhanced Twisted Kyo (DB2+EX) | Scorpion | block_advantage -25→-5, notes: 2 bars |
| Spinal Tap (B+2) | Sub-Zero | active 24→25, cancel 33→32 |
| Heavy Toe (3) | Sub-Zero | hit_advantage 10→12 |
| Acid Spit Ball (Hold 1) | Reptile | hit_damage 60→70, recovery 32→26 |
| Enhanced Acid Spit Ball (Hold 1) | Reptile | hit_damage 90→110, block_type High→Mid, recovery 32→26 |
| Razzle Dazzle (DB2) | Raiden | hit_damage 0→20 |

## Balance changes needing clarification and application

### Multi-hit / unclear value mapping

| Character | Move | Command | JSON ID | Current Value | Patch Note | Question |
|---|---|---|---|---|---|---|
| Scorpion | Side Kick | 4 | ~1770 | hit_adv: 17 | "+9 more frames of hit advantage" | Should hit_adv be 26? |
| Scorpion | Sweeping Scorpion Tail | B+3 | ~1774 | block_type: Low,Low | "first two hits now hit mid & can be 2in1 cancelled" | Change block_type to Mid,Low? Add cancel value? |
| Scorpion | Enhanced Flame-Port | DB3+EX | ? | recovery: ? | "recovers 7 frames faster & no longer enables autoblock" | recovery field needs -7 |
| Baraka | Quick Shave | 4 | 96 | cancel: 29 | "cancel occurs 2 frames later" | Should cancel be 31? |
| Baraka | Butcher | 4,4,4 | 97 | cancel: 55 | "cancel occurs 2 frames later" | Should cancel be 57? |
| Baraka | Slaughter House | 4,4,4,4,4,4 | 98 | hit_adv: 19 | "has 1 less frame of hit advantage" | Should hit_adv be 18? |
| Baraka | Baraka Barrage 3rd hit | DF2 | 121 | hit_adv: 18 | "3rd hit now has 11 more frames of hit advantage" | Multi-hit, can't target 3rd hit individually |
| Reptile | Kroco-Die-Le | 3 | 1703 | hit_adv: 24 | "+12 more frames of hit advantage" | Should hit_adv be 36? |
| Reptile | Devastating Blow (charged) | B+2 | 1694 | startup: 19, recovery: 27 | "fully charged now starts up 3f faster and recovers 3f faster" | Current data doesn't differentiate charged vs uncharged. Need separate entry? |
| Reptile | Killer Kick | 1,1,4 | 1689 | cancel: 0 | "can now be cancelled into (Air) Falling Fangs" | Notes already updated. Should cancel field change? |
| Liu Kang | Dragon's Tail | BF3 | ? | ? | "first hit has 28 more frames of hit advantage" | Multi-hit. Need to find the JSON entry. |
| Li Mei | (Air) Nova Blast | U+? | ? | recovery: ? | "recovers 3 frames faster" | Find entry and subtract 3 from recovery |
| Li Mei | Chain Reaction | BF4 | ? | recovery: ? | "recovers 12 frames faster on miss" | Find entry. Recovery field might need adjustment. |
| Kenshi | Teamwork | DB4 | ? | ? | "takes 25 less frames" | Which field? recovery? startup? |
| Kenshi | Summon Ancestor | DB1 | ? | ? | "duration is now 10 seconds (was 15 seconds)" | No duration field in JSON |
| Geras | History Lesson | DF2 | 406 | recovery: 42 | "recovers 17 frames faster on miss" | Does this mean recovery field reduces? Patch says "on miss" specifically. |
| Raiden | Electric Fly | BF3 | ? | recovery: ? | "Increased recovery on miss by 8 frames" | Recovery field adjustment? |

### New moves added to template at `src/assets/data/new_moves_template.json`
All placeholder entries with TBD values. Fill in and merge.

| Character | New Moves |
|---|---|
| Baraka | Desperate Tarkatan (D+SS), Heel Smite (Hold F+3) |
| General Shao | Smoldering Wrath |
| Geras | Enhanced History Lesson, Enhanced Follow-Up Exam |
| Havik | Nether Snatcher, Enhanced Nether Snatcher, (Air) Nether Stomp, Enhanced (Air) Nether Stomp, Enhanced Corpse Taunt |
| Kenshi | Soul Exit |
| Kitana | (Air) Enhanced Fan Toss, (Air) Reverse Fan Toss, (Air) Enhanced Reverse Fan Toss, Wind Bomb Squall |
| Li Mei | Rising Sun (B+2,4) |
| Quan Chi | Zone of Waste, Best Foot Backward (D+F+4) |
| Raiden | Electric Overcharge, Electric Discharge |
| Rain | Shipwrecker (F+1), Puddle Step (B+3), Kraken Killer (F+1,2), Surface Breacher (B+3,4) |
| Reiko | (Air) Reap The Whirlwind, (Air) Enhanced Reap The Whirlwind |
| Scorpion | Fire Pillar Thrust (F+3,4) |
| Sub-Zero | Enhanced Ice Klone (2 Klones, 2 bars) |

## How to apply
1. Find the entry in `src/assets/data/move_list.json` using command + char_name
2. Update the specific numeric field
3. Verify JSON is still valid
4. Run `npm run build` to confirm no errors
