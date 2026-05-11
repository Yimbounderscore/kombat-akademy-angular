import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Characters } from './pages/characters/characters';
import { CharacterDetail } from './pages/character-detail/character-detail';
import { MoveList } from './pages/move-list/move-list';
import { Combos } from './pages/combos/combos';
import { TierMaker } from './pages/tier-maker/tier-maker';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'characters', component: Characters },
  { path: 'character/:name', component: CharacterDetail },
  { path: 'move-list', component: MoveList },
  { path: 'combos', component: Combos },
  { path: 'tier-maker', component: TierMaker },
  { path: '**', redirectTo: '' }
];
