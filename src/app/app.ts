/*
 * APP COMPONENT
 *
 * This is the root component - the "master controller" of the app.
 * All game data is preloaded via APP_INITIALIZER in app.config.ts
 * before the first page renders, so every route has instant access.
 */
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { SettingsService } from './services/settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'Kombat Akademy';

  constructor(
    private settingsService: SettingsService,
  ) {}

  ngOnInit(): void {
    this.settingsService.initialize();
  }
}
}
