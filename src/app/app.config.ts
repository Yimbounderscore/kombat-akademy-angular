import { ApplicationConfig, APP_INITIALIZER, provideBrowserGlobalErrorListeners, inject } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { routes } from './app.routes';
import { GameDataService } from './services/game-data';

function preloadGameData(): () => Promise<void> {
  return () => {
    const gameDataService = inject(GameDataService);
    return Promise.all([
      lastValueFrom(gameDataService.loadMoveList()),
      lastValueFrom(gameDataService.loadKameoMoveList()),
      lastValueFrom(gameDataService.loadCombos()),
      lastValueFrom(gameDataService.loadGameplay())
    ]).then(() => {});
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: preloadGameData,
      multi: true
    }
  ]
};