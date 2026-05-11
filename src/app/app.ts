/*
 * APP COMPONENT
 *
 * This is the root component - the "master controller" of the app.
 * When the app starts, it:
 * 1. Initializes settings (theme, platform)
 * 2. Pre-loads all game data (moves, combos) into cache
 *
 * PRE-LOADING DATA:
 * By loading the data here (at app startup), we ensure that
 * when the user navigates to any page, the data is already
 * in memory and ready to use instantly.
 */
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { SettingsService } from './services/settings';
import { GameDataService } from './services/game-data';

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
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {
    // Initialize user settings (theme, platform)
    this.settingsService.initialize();

    // Pre-load game data into cache
    // These HTTP requests happen in the background while the user
    // is looking at the home page. By the time they click on
    // "Characters" or "Move List", the data is already loaded.
    this.gameDataService.loadMoveList().subscribe();
    this.gameDataService.loadCombos().subscribe();
  }
}