export const STRATEGY: { [characterName: string]: { overview: string; strengths: string[]; weaknesses: string[] } } = {
  'Ashrah': {
    overview: 'Ashrah is a Stance kombatant with both Rushdown/Mixup and Zoning qualities that excels at playing mid-range neutral with long-reaching sword attacks. She has several disjointed pokes and anti-airs that give her space-control and whiff-punishes, plus a few pressure/mixup tools to open up the opponent. Her S2 has crumple stun with High/Low options, she has Mid/Overhead strings, a safe 14f Low (B3), and an unsafe 23f crossup Overhead (F3) that causes a ground bounce. Most of her specials are unbreakable in kombos. Her BF2 teleport dash can be delayed to project her further away and allows her to perform a frontal push or a fast 8f crossover slice with full armor during startup. Ashrah can switch her sword stance from Heaven Mode to Hell Mode, which changes her specials properties and stacks a Sin debuff on the opponent up to 3 times.',
    strengths: ['Disjointed sword normals for great range', 'Stance switching creates mixup opportunities', 'Unbreakable specials in combos', 'Teleport dash with armor', 'Sin mechanic for bonus damage'],
    weaknesses: ['Requires stance management', 'Some strings have gaps', 'Slower startup on some key moves']
  },
  'Baraka': {
    overview: 'Baraka is a literal Rushdown monster designed around Aggression and Pressure with several blade normals and multi-hitting strings/specials that can be enhanced with Kameo assists to inflict significant Damage/Chip against opponents. His tools include a multi-hitting confirmable 444444 string with safe staggers, two fast Mids that can lead to kombos (F4/B3), a fast cancellable Low (B1), and a 29f Overhead (F3) that is reactable but places him in an airborne state. His many High attacks or unsafe moves can be covered by Kameo assists. Certain EX specials increase chip damage and inflict damage over time. Desperate Tarkatan allows him to trade his Fatal Blow for an install that slowly drains his health while granting super meter.',
    strengths: ['Terrifying chip damage and pressure', 'Long, multi-hitting strings break armor', 'Disjointed normals for strong footsies', 'Install super grants massive meter gain', 'EX BF3 low-profiles and has armor'],
    weaknesses: ['Limited combo routing options', 'Highly reliant on Kameo for pressure', 'Weaker zoning from fullscreen']
  },
  'Cyrax': {
    overview: 'Cyrax is a Rushdown/Mixup cyber-ninja with Setplay and Zoning/Counterzoning capabilities. She excels at positioning Bomb launchers onscreen and using Mistwalk teleports to condition opponents with close-range mixup/pressure options. Bombs can be cancelled on startup to throw a dud for mindgames. Cyrax compensates for weak mid-range presence with mobility tools like her wall jump for evading corner pressure. Her F2 Overhead launch is 28f but can be cancelled on startup into a fullscreen 25f Low slide (F24), creating an unsafe 50/50. Capture Foam (BF1) is a High projectile that stuns; EX version becomes a Mid Net that destroys projectiles and carries opponents to the corner.',
    strengths: ['Bomb setups create powerful okizeme', 'Mistwalk teleports for mobility and mix', 'Wall jump for corner escape', '50/50 potential with F2/F24', 'EX Net carries to corner'],
    weaknesses: ['Weak mid-range presence', 'Some moves are punishable on block', 'Requires setup time for bombs']
  },
  'Ermac': {
    overview: 'Ermac is a Zoner/Setplay kombatant that assembles multiple souls to control space and open opponents up for kombos. His Spirit Punch (BF1) can be charged and cancelled into dashes for pressure. Witch Slam (DB1) launches when enhanced and serves as a combo starter and ender. (Air) Suspended Animation (DB2) lets him float and cancel for advanced mixups. Death Embrace (FDB3) activates Mana Shield, causing incoming damage to deplete Super Meter before health. His teleport (DB4) and low projectile (Air DB3) give him multiple approach and mixup angles. Ermac gameplan revolves around canceling his specials to maintain pressure and create frame traps.',
    strengths: ['Spirit Punch cancel creates strong frame traps', 'Mana Shield absorbs damage with meter', 'Air float for unique mixups', 'Good teleport options', 'Multiple projectile angles'],
    weaknesses: ['Low health pool', 'Requires meter for optimal damage', 'Some strings have gaps']
  },
  'General Shao': {
    overview: 'General Shao is a Stance kombatant with strong mobility despite his big size, built around pouncing at key opportunities depending on if he is armed or unarmed. In Axe Stance he excels at neutral with long-reaching disjointed normals. Notable tools include a fast Mid with Overhead knockdown (B12), a 26f Mid launcher that is +3 on block (B2), and a Low projectile (DB4). Power Strike (DF4) plants the axe and enters No Axe Stance, trading reach for superior speed, frame advantage, mixups, and damage. In No Axe Stance his 224 becomes a gapless plus-on-block launch string. At 1100 HP, General Shao is tied for the highest health in the game.',
    strengths: ['1100 base HP - highest in the game', 'Disjointed axe normals for great range', 'No Axe stance has strong mixups', 'Armored approaches', 'Projectile from axe stance'],
    weaknesses: ['Slower startup in Axe Stance', 'Must manage axe pickup/drop', 'Weaker without the axe']
  },
  'Geras': {
    overview: 'Geras is a Grappler/Setplay kombatant with time-based abilities that allow him to control the flow of the match. As the new Keeper of Time, he manipulates the sands to create difficult-to-avoid setups and command grab situations. His tools include advancing attacks with good range, time-freeze setups that enable unique combo routes, and a command grab that can be enhanced for additional damage. Geras excels at creating 50/50 situations up close while having tools to slow down opponents who try to runaway.',
    strengths: ['Time-manipulation setups', 'Strong command grab game', 'Good advancing normals', 'High damage potential', 'Unique combo routes with time freeze'],
    weaknesses: ['Can struggle against fast rushdown', 'Some moves are punishable on read', 'Requires knowledge of timing setups']
  },
  'Ghostface': {
    overview: 'Ghostface is a Rushdown/Mixup killer with a unique 3-in-1 design. He begins as the Woodsboro Slasher and can enlist two Black Dragon mercenaries (the Enforcer and the Assassin). He has generous hitboxes and forward reach on his knife normals. His gameplan focuses on neutral/footsies and converting single-hit mixups/Throws into kombos. His B3 is a fast Mid that restands the opponent with enough advantage for a vortex. Ghostface can Swap identities mid-combo for 1 bar, gaining new abilities. EX specials extend kombos, making him meter-intensive with high reward.',
    strengths: ['Three identities for varied tools', 'B3 restand creates vortex situations', 'Generous hitboxes on normals', 'Identity swapping extends combo routes', 'Strong strike/throw game'],
    weaknesses: ['Meter-intensive for optimal damage', 'Requires knowledge of all three identities', 'Some gaps in strings']
  },
  'Havik': {
    overview: 'Havik is a Brawler/Mixup kombatant with Setplay capabilities. He boasts the highest base health (1100 HP) and has slow strings and staggers that are safe/plus with Overhead/Low options, plus specials with armor or unbreakable properties. His gapless 112 has a 23f Overhead ender that is +3 on block. Helping Hand (DB1) launcher becomes an armored knockdown if Havik is hit during startup. Nether Snatcher (DB2) is a Low launcher that becomes armored when Enhanced. His BF2 can be enhanced at 30% HP for 2 bars to create a Tether enabling an unblockable crumple. EX Taunt reverses opponent controls but increases his damage output.',
    strengths: ['1100 HP - highest in the game', 'Plus on block from many normals', 'Safe kombo starter with Neoplasm', 'Unblockable setups with EX Blood Bath', 'Armor on multiple specials'],
    weaknesses: ['Slow startup on most moves', 'No true frame traps despite plus frames', 'Some strings have punishable gaps']
  },
  'Homelander': {
    overview: 'Homelander is a high-flying Rushdown/Stance superhero with Mixup and Zoning capabilities. He can cancel various movements/attacks into Flight stance to instantly access all aerial options. He has disjointed laser normals and both airborne and grounded fullscreen projectile beams. BF2 Command Dash can be performed on the ground or in Flight, with follow-ups including a High Command Grab (BF22) that can tick-throw. He has Instant Overhead mix by cancelling normals into Flight for jump-in attacks. His DB4 in air/Flight can be delayed and cancelled, with the EX version coming out in 6f to launch. His Back Throw can loop into itself.',
    strengths: ['Free flight with instant overheads', 'Command grab that ticks from pokes', 'Throw loop potential', 'Fullscreen laser projectiles', 'Disjointed laser normals'],
    weaknesses: ['Flight cancels require precise inputs', 'Weaker when flight is denied', 'Limited grounded low options']
  },
  'Johnny Cage': {
    overview: 'Johnny Cage is a Rushdown/Glass Cannon kombatant that sacrifices lower health (950 HP) for faster/stronger offensive pressure and mobility. His tools include plus frames from his jabs, an autoshimmy string (s.21), Overhead/Low mixup enders leading to kombos, a safe 10f confirmable Mid (F3), fast anti-airs, and the fastest armor reversal in the game (EX BF4). He lacks a projectile but his DF3 Shadow Dash advances quickly with projectile-invulnerability when Enhanced. His Fatal Blow can be charged to parry all attacks. Johnny builds up his unique Hype gauge to access Wowing Out (FDB4), an install that turns all specials into EX versions.',
    strengths: ['Fastest armor reversal in the game', 'Hype install makes all specials EX', 'Plus frames from jabs', 'Autoshimmy string (s.21)', 'Safe 10f Mid confirm'],
    weaknesses: ['950 HP - below average', 'No projectile', 'Relies on Hype gauge for peak power']
  },
  'Kenshi': {
    overview: 'Kenshi is a Puppet/Stance swordsman designed around playing neutral to set up/hit-confirm into his DB1 Summon Ancestor special to trigger Sento Stance, which calls a spirit fighter onscreen controlled independently of Kenshi. Sento replaces the Kameo fighter for 10 seconds, giving Kenshi access to several new mixup options and unique pressure situations such as extensive blockstrings and the Sento Sandwich. The spirit is disabled for 2 seconds if hit. Kenshi begins every round with his katana sheathed and must use Summon Ancestor to enter Sento Stance, which has its own unique normals and specials.',
    strengths: ['Sento Stance gives puppet mixups', 'Sento Sandwich pressure', 'Unique blockstrings with spirit', 'Strong neutral with katana normals', 'High damage potential in Sento'],
    weaknesses: ['Vulnerable without Sento', 'Spirit can be disabled on hit', 'Complex execution required', 'No Kameo during Sento']
  },
  'Kitana': {
    overview: 'Kitana is a Zoner/Setplay kombatant that excels at playing neutral/footsies with close-range fan normals and advancing attacks, as well as various projectiles/setups. She can whiff-punish, anti-air, and pressure opponents to open them up for extensive (sometimes unbreakable) kombos. Her tools include a safe jab stagger with confirm options (S11/S14), two fast advancing Mids (F1/B2), a safe advancing Low (B3), and a disjointed Sweep (B4). Her EX DF2 armor reversal converts into juggles with Kameo assists. Square Wave (DB2) can be used grounded/airborne to advance fullscreen. Fan Toss (BF1) is a High projectile that becomes a Mid launch when Enhanced.',
    strengths: ['Excellent projectile variety', 'Unbreakable combos in some routes', 'Strong keepaway and zoning', 'Good advancing normals', 'Square Wave for mobility'],
    weaknesses: ['Lower damage up close', 'Some key moves are unsafe', 'Requires space to be effective']
  },
  'Kung Lao': {
    overview: 'Kung Lao is a Rushdown monk that excels at pressuring opponents with close-range normals and advancing specials. His tools include a hit-confirmable autoshimmy (212), a fast 6f punish button (B1), a safe 12f Mid (B2) that confirms into a launch, a 12f Low sweep (B4) that is +3, and a High-Overhead S3 that is neutral on block. His hat projectiles grant zoning while his DB4 divekick and advancing armor moves help close distance. His EX BF2 reversal converts into juggles with Kameo assists and can be made safe for an extra bar. DU3 Shaolin Spin has meterless armor as long as it is delayed.',
    strengths: ['6f punish button (B1)', 'Armored Shaolin Spin', 'Strong oki from sweeps', 'Divekick for approaches', 'High damage in corner'],
    weaknesses: ['Short range on most normals', 'Hat projectiles share cooldown', 'Limited mid-range presence']
  },
  'Li Mei': {
    overview: 'Li Mei is a Rushdown/Mixup kombatant with Zoning/Setplay capabilities, having projectiles and specials for both close and long-range combat. She has safe/plus strings (S21/S12) that can be used for pressure and hit-confirming. Her firework projectiles can be used to control space and extend combos. Her lantern setups create difficult-to-avoid situations for opponents trying to approach. Li Mei excels at maintaining pressure at multiple ranges, forcing opponents to guess between her various tools.',
    strengths: ['Good pressure strings', 'Projectile zoning tools', 'Lantern setups for oki', 'Safe on block strings', 'Versatile at multiple ranges'],
    weaknesses: ['Lower damage output', 'Some moves are punishable', 'Requires setup for max potential']
  },
  'Liu Kang': {
    overview: 'Liu Kang returns as the Shoto/All-Rounder archetype of the game, boasting several fireballs, a jump-invulnerable DB4 anti-air (EX gains full invulnerability and jump-cancellability), and two advancing kick attacks (EX BF4 armor reversal and BF3 flying kick). Despite weaker mid-range presence, his fast mobility and up-close pressure/safety make him ideal for learning the game while staying powerful at all skill levels. His tools include a 6f jab with an autoshimmy string, a safe 10f Mid (B2) with launch/knockdown options, and a safe 14f F4 double-Mid that staggers well.',
    strengths: ['6f jab with autoshimmy', 'Godlike anti-airs', 'Classic fireball game (High/Low/Air)', 'High damage for simple execution', 'Throw cancel with Kameos'],
    weaknesses: ['Shorter limbs for footsies', 'No low/overhead mixup', 'Weaker mid-range presence']
  },
  'Mileena': {
    overview: 'Mileena is a Rushdown/Mixup kombatant that excels at playing neutral/footsies with close-range sai attacks and advancing kick normals/strings. Her tools include a fast confirmable High-Overhead jab string (S12), two fast High-Overhead (S34) and double-Overhead (F4) knockdowns, a fast advancing Mid stagger (F1), and various Low/Overhead enders. Her Low Sai (BF3) is an unsafe 20f Low used for 50/50s. Her High Straight Sai (BF1) can be Enhanced to destroy projectiles and teleport Mileena to the opponent. Roll (BD4) is an advancing Mid launcher. Krazed Tarkatan trades her Fatal Blow for a 10-second install allowing meterless chain canceling.',
    strengths: ['Strong 50/50 mixup potential', 'Teleport for side-switching', 'Install super for meterless combos', 'Good advancing normals', 'Projectile with teleport follow-up'],
    weaknesses: ['Lower health', 'Some key tools are unsafe', 'Requires close range to be effective']
  },
  'Nitara': {
    overview: 'Nitara is a Pixie/Glass Cannon vampiress with the lowest base health (900 HP) as a trade-off for increased mobility and mixup options. Her grounded neutral is weaker but she has normals that put her in an airborne state for aerial options. Air Dash allows free 8-directional movement in the air, with consecutive dashes costing meter. Her (Air) DB4 divekick provides a meterless launcher and becomes safe when Enhanced. Blood Sacrifice (DF4) allows her to risk health to enhance specials, drain/regain health, and greatly increase damage output. Despite her stubby grounded normals, her unparalleled aerial mobility makes her difficult to pin down.',
    strengths: ['Unmatched aerial mobility (8-way airdash)', 'Divekick launcher', 'Health steal potential', 'Good mixup from airborne normals', 'EX divekick is safe'],
    weaknesses: ['900 HP - lowest in the game', 'Stubby grounded normals', 'Limited fireball access', 'Weaker neutral game']
  },
  'Noob Saibot': {
    overview: 'Noob Saibot is a Rushdown/Mixup wraith with Zoning/Setplay capabilities. He excels at close-range with his default normals while gaining access to farther-reaching disjointed attacks and projectiles from his Shadow Klone trait. His tools include advancing Mid-Low (F13), Low-Mid (B33), and High-Overhead (S44) staggers, and knockdowns such as his 7f High-Low jab string (S24) and 20f Overhead (F3). Klone grants string extensions with Low/Overhead confirm options. His Ghostball (DF1) projectile connects even on block and can be detonated to launch. Embrace Khaos (FDB1) is a once-per-match 10-second install granting faster portals and unique combo routes.',
    strengths: ['Shadow Klone creates 50/50s', 'Ghostball hits on block', 'Strong zoning tools', 'Install super for extended routes', 'Good close-range normals'],
    weaknesses: ['Klone disabled briefly after use', 'Some moves require meter', 'Complex install routing']
  },
  'Omni-Man': {
    overview: 'Omni-Man is an aggressive Rushdown/Brawler designed to fly right at opponents, enforcing mixups with unreactable movement. His slow F2 Overhead travels nearly fullscreen and can cross up. His safe F3 hits Low-Mid and is cancellable. He has a variety of safe/plus strings (S12, B11/B12, S22, F41) for staggering and whiff-punishing. EX BF2 is a fast armored reversal. The core of his gameplay is Viltrumite Stance (DB3), which auto-dodges projectiles and can cancel into options that track the opponent. The stance can also be cancelled to act as a spot dodge. Omni-Man can access all grounded specials while airborne.',
    strengths: ['Viltrumite Stance dodges projectiles', 'Strong pressure strings that are plus', 'Fullscreen Fatal Blow', 'Fast armored reversal', 'Meter-independent gameplan'],
    weaknesses: ['Must get in - no projectile', 'Weaker from a life deficit', 'Air dash has recovery on whiff', 'Damage not exceptional']
  },
  'Peacemaker': {
    overview: 'Peacemaker is a Brawler with Zoning and Counterzoning capabilities. His F41 string is effective for neutral and advancing. He has two strings with Throw enders: S22 (restands and cancellable) and B24 (grabs crouching opponents). He has two Eagly projectile assists (DF4 Low launcher, DB4 retreating Mid). Eagly can attack the opponent Kameo, disabling them. His projectiles include DB1 anti-air and BF1 gunshot, plus options that destroy/absorb/reflect projectiles. His BF2 and DB2 advance quickly. EX BF3 is an armored reversal with fullscreen range and fast startup, one of the best in the game.',
    strengths: ['Kameo suppression with Eagly', 'Fullscreen armored reversal', 'Good zoning and counterzoning', 'Strong throw game', 'High damage for few resources'],
    weaknesses: ['Eagly moves share cooldown', 'Some gaps in strings', 'Anti-gravity has limited utility']
  },
  'Quan Chi': {
    overview: 'Quan Chi is an unorthodox Zoner/Setplay sorcerer with the lowest health in the game (900 HP) as a trade-off for oppressive projectile/trap options and mixup potential. His S4 is a tracking High boot hitting behind the opponent. His strings have gaps but he has safe, disjointed, and long-reaching attacks. His +2 jab has a gapless jailing Mid-High (S121) or safe Overhead launcher (S13). His gameplan is built on setting up Zone portals: Zone Of Power (DB3) alters projectiles, Zone Of Fear (EX) repels opponents, and Zone Of Waste (DF3) grants armor by draining nearby opponent meter. EX Waste closes his gap-filled offense completely.',
    strengths: ['Oppressive projectile/trap setups', 'Zone portals alter match dynamics', 'Field Of Bones restricts movement', 'Safe on block strings', 'EX Waste closes all gaps'],
    weaknesses: ['900 HP - lowest in the game', 'Most strings have gaps', 'Unsafe specials need Kameo cover']
  },
  'Raiden': {
    overview: 'Raiden is a Rushdown/Mixup monk with Counterzoning and Setplay qualities. He excels at neutral/footsies with close-range and forward-advancing buttons. His tools include safe, gapless strings leading to kombos such as 242, F224, and F434. His DB2 can be meterlessly cancelled into after strings for a +21 reset. Shocker (DF2) serves as anti-air and kombo extension. Electromagnetic Storm (DB3) is a 5-hit Mid that pulls opponents in. Electric Orb (DF1) is a chargeable projectile that creates orbs. Electric Fly (BF3) flies fullscreen. Lightning Port (D,U) teleports behind with an EX version that launches.',
    strengths: ['Excellent pressure with plus strings', 'DB2 reset for +21 advantage', 'Electromagnetic Storm for chip and pull', 'Chargeable projectiles', 'Fullscreen advancing specials'],
    weaknesses: ['Strict combo pathing', 'Slow juggle normals', 'Limited mixup options']
  },
  'Rain': {
    overview: 'Rain is a Zoner/Setplay aquamancer with Mixup capabilities. He excels at neutral with ranged/disjointed staff and water-based attacks plus projectile setups for hard-to-block sequences. His tools include a safe jab string with Low ender (114), a fast/safe Mid-Low stagger (F21), and a fast/safe advancing Mid string with launch option (B34). His safe 28f Overhead (F3) can continue into a safe Overhead launch (F32). His BF1 projectile charge can be dash-cancelled. Rain God (DDU) is a projectile launch that can be cancelled. Ancient Trap (BF4) is a slow +2 Low launcher that creates oki setups. His DF2 water portals allow teleporting between them.',
    strengths: ['Hard-to-block projectile setups', 'Water Gate portals for mobility', 'Safe on block strings', 'Dash-cancellable projectile', 'Strong oki setups'],
    weaknesses: ['Slow overhead', 'Some setups require set-up time']
  },
  'Reiko': {
    overview: 'Reiko is a Grappler/Brawler that excels at up-close pressure/mixups in short but oppressive interactions. His tools include two autoshimmy strings (S12, S21), a safe Mid stagger with confirmable launcher (F12/F124), a safe 16f Overhead (F2), a 12f Low (B4) at +3, and a 13f High (B2) at +8. Conditioning opponents to block allows Command Grabs (BDF1/Air DF1) that convert into kombos with Kameo assists. Charging Pain (BF3) sends Reiko running into a Low slidekick that side-switches. His Fatal Blow is a command grab that tick-throws from crouching pokes. He has disjointed kick attacks for neutral and anti-airing.',
    strengths: ['Command grab pressure', 'Autoshimmy strings', 'Plus on block normals', 'Good range on kick attacks', 'Fatal Blow is a command grab'],
    weaknesses: ['Low meterless damage', 'Shorter range on punches', 'Shurikens have low priority', 'Inconsistent zoning']
  },
  'Reptile': {
    overview: 'Reptile is a Rushdown/Mixup kombatant that excels at neutral with close and mid-range buttons to whiff-punish and hit-confirm into kombos. He has different string starters sharing the same enders which launch meterlessly. He has safe longer-reaching Low attacks (B3, B4) and a High-Mid S3 tail whip cancellable into his aerial Overhead DB4. His Mid projectile Force Ball (DF3) reaches midscreen and provides a meterless launch. His mixup game is enhanced by Invisibility (DU4), which disappears if the opponent connects with him on hit or block, helping establish unseeable mix and baiting attacks.',
    strengths: ['Meterless launchers from multiple starters', 'Force Ball for zoning and combos', 'Invisibility for unseeable mix', 'Good low pokes', 'Aerial Overhead for mixups'],
    weaknesses: ['Weaker zoning from fullscreen', 'Slow startup on some key moves']
  },
  'Scorpion': {
    overview: 'Scorpion is a Rushdown/Mixup ninja with Counterzoning capabilities that excels at neutral/footsies with mid-range normals and specials that close distance. His B3 is a long-range disjointed Mid-Low that is unsafe but special-cancellable after the first hit. His tools include a disjointed S21 stagger, 9f anti-air (B2), fast/safe Mid (F3) leading to juggles, and several aerial strings. His DB3 Flameport tracks behind the opponent. His EX BF2 armor reversal converts into juggles with Kameo assists. His BF1 Spear causes a stun/restand to start/extend kombos. His multi-hitting DB2 is unsafe but inflicts chip and is unbreakable in kombos.',
    strengths: ['Strong space control with B3 and Spear', 'Simple kombo structure with flexibility', 'Great chip damage with Twisted Kyo', 'Hit and run with teleport', 'Throw kombos with Kameos'],
    weaknesses: ['Lacks grounded overhead', 'Needs resource (Kameo/EX) to start', 'Relies on Kameo for certain routes']
  },
  'Sektor': {
    overview: 'Sektor is a Zoner cyber-ninja with Rushdown/Mixup qualities. She excels at neutral with advancing/retreating moves, mobility tools, projectiles, and counterzoning. Her tools include a fast/safe advancing Mid string cancellable into aerial specials (F212), a fast/safe Low (B3), and a safe 24f Overhead (B2). (Air) Thrust Boost propels her mid-air in 3 directions. Her straight BF1 projectile becomes a Mid when Enhanced with damage over time. Flamethrower (BF2) has armor when Enhanced. Blast Shield (DB3) absorbs projectiles and can cancel into other specials when Enhanced. Her DB4 teleport launches or extends juggles.',
    strengths: ['Strong projectile game', 'Air mobility with Thrust Boost', 'Blast Shield absorbs and counters', 'Armored Flamethrower', 'Good keepaway tools'],
    weaknesses: ['Weaker up close', 'Some moves are punishable', 'Meter-dependent for peak damage']
  },
  'Shang Tsung': {
    overview: 'Shang Tsung is a form-based Stance/Mimic sorcerer who can switch freely between Young Form (zoner stance with straight fireballs) and Old Form (extended unbreakable kombos from ground fireballs) by inputting Morph (Down + Flip Stance). He can transform into the opponent using Form Stealer (FDB4), with Enhanced lasting longer and increasing damage. His Old Form EX DB3 costs 2 bars but is unbreakable and causes a restand. He can morph into the opponent Kameo and Kopy one of their moves (DB4). Both stances have pros/cons requiring players to swap between them.',
    strengths: ['Two stances for any situation', 'Form Stealer copies opponent moves', 'Kopy Kameo for extra options', 'Unbreakable combos in Old Form', 'Strong zoning in Young Form'],
    weaknesses: ['Morph has startup in neutral', 'Complex stance management', 'Requires knowledge of copied moves']
  },
  'Sindel': {
    overview: 'Sindel is a Zoner kombatant with Mixup and Setplay qualities. She excels at neutral with several disjointed hair-whip normals/strings and advancing kick attacks. Her tools include multi-hitting normals for stagger (F1/F4), a 13f Low launch that low-profiles, a fast Mid into airborne state (B2/B23), a fast High-Overhead knockdown (S33), and a 20f Overhead armor reversal (DF4). Levitate allows floating and aerial options. Her Hairball (DF1) projectile destroys projectiles when Enhanced. Scream (BF2) is a disjointed Mid that stuns/restands. Inspire (DB3) affects Kameo Gauge, providing regeneration or disabling the opponent Kameo.',
    strengths: ['Excellent reach with hair normals', 'Projectile options for zoning', 'Air float for extended pressure', 'Kameo control with Inspire', 'Strong keepaway'],
    weaknesses: ['Slow startup on mixups', 'Some moves are interruptible', 'Requires space to be effective']
  },
  'Smoke': {
    overview: 'Smoke is a Rushdown/Mixup ninja that excels at neutral/footsies with close-range blade attacks and mobility/defense specials that quickly teleport and keep him safe. His tools include a safe leaping 28f Overhead (B2), advancing double-High kick (F4) cancellable into aerial specials, a safe confirmable 12f Low (F3), and a double-Low crouching string (D34). His BF3 advances fullscreen with projectile-invulnerability and can be cancelled. Smokeport (DB4) hits Low and can be used grounded or airborne. EX Smoke Bomb and EX Smokeport grant Invisibility for unseeable mix. His pressure is built around Vicious Vapors cancels.',
    strengths: ['Invisibility for unseeable mixups', 'Vicious Vapors cancel pressure', 'Projectile-invulnerable approach', 'Good mobility with teleports', 'Safe on block strings'],
    weaknesses: ['Slow startup on mixup options', 'Vicious Vapors cancels can be interrupted']
  },
  'Sub-Zero': {
    overview: 'Sub-Zero is a Rushdown/Setplay character with Counterzoning capabilities centered around playing neutral with mid-range and forward-advancing buttons. His Ice Klone (DB1) is a versatile tool serving as a setup trap and kombo extender, freezing opponents for guaranteed kombos. Ice Ball (DF1) is a High projectile that freezes and becomes a Mid that destroys projectiles when Enhanced. Ice Slide (BF3) is a Low that travels fullscreen, low-profiles, and can be Enhanced for armor and side-switch. Other tools include a fast advancing Mid with gapless stagger (F12), a 2-hit Overhead launcher (F2), two gapless High-Low knockdowns (S34, S44), and a divekick.',
    strengths: ['Ice Klone setplay and combos', 'Strong projectile game', 'Fast advancing mids', 'Good mixup tools', 'Divekick for approaches'],
    weaknesses: ['Freeze duration decreases with reuse', 'Some moves are punishable']
  },
  'Takeda': {
    overview: 'Takeda is a Rushdown/Mixup assassin with Zoning/Setplay capabilities that excels at space control and neutral with long-range whip attacks and advancing moves. His tools include a jab with safe Low and Overhead options, a fast ranged stagger (F1), a slow but ranged Mid confirm (B21), a safe 22f Overhead knockdown (F4), and various whip pokes. His B3 is a safe 15f Low slide that jails. His Low projectile (DF1) is directable and can enforce 50/50s. Smart Shuriken (DB1) throws a directable setup. Whip Art (DF4) is a 3-hit rekka. Takeda has multiple aerial specials for mobility and combo extensions.',
    strengths: ['Exceptional range with whip normals', 'Multiple aerial specials for mobility', 'Full screen projectile Fatal Blow', 'Persistent Low projectile harassment', 'Open combo routing options'],
    weaknesses: ['Slow startup on mids', 'Some gaps in strings', 'Requires precision for max damage']
  },
  'Tanya': {
    overview: 'Tanya is a Zoner kombatant that excels at mid-range neutral and Defense/Mobility with several disjointed staff normals. Her advancing F211 has a gap after the first hit but is safe on block with an optional safe Overhead knockdown ender. Other safe staggers include S12 and 16f all-Low B344 string that converts into juggles with Kameo assists. Her (2,1+3) and (3,1+3) strings can side-switch along with Drill Kick (BF4). Her S3, sweep (B4), and anti-air B2 can contest opponents from a distance. Guidance charges enhance her specials properties.',
    strengths: ['Disjointed staff normals for safe range', 'Side-switch options', 'Guidance charges enhance specials', 'Good anti-air tools', 'Safe on block strings'],
    weaknesses: ['Gaps in some strings', 'Requires Guidance setup for peak power']
  }
};
