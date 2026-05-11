import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Characters } from './pages/characters/characters';
import { CharacterDetail } from './pages/character-detail/character-detail';
import { Kameos } from './pages/kameos/kameos';
import { KameoDetail } from './pages/kameo-detail/kameo-detail';
import { MoveList } from './pages/move-list/move-list';
import { Combos } from './pages/combos/combos';
import { TierMaker } from './pages/tier-maker/tier-maker';
import { Guides } from './pages/guides/guides';
import { GuideTheMatch } from './pages/guides/the-match/the-match';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'characters', component: Characters },
  { path: 'character/:name', component: CharacterDetail },
  { path: 'kameos', component: Kameos },
  { path: 'kameos/:slug', component: KameoDetail },
  { path: 'move-list', component: MoveList },
  { path: 'combos', component: Combos },
  { path: 'tier-maker', component: TierMaker },
  { path: 'guides', component: Guides },
  { path: 'guides/the-match', component: GuideTheMatch },
  { path: '**', redirectTo: '' }
];
