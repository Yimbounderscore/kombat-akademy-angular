import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private platform: string = 'universal';
  private isDarkTheme: boolean = true;

  constructor() {
    this.loadSettings();
  }

  private loadSettings(): void {
    const savedPlatform = localStorage.getItem('KA_PLATFORM');
    if (savedPlatform) {
      this.platform = savedPlatform;
    }

    const savedTheme = localStorage.getItem('KA_THEME');
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
    }
  }

  setPlatform(platform: string): void {
    this.platform = platform;
    localStorage.setItem('KA_PLATFORM', platform);
    this.applyPlatform();
  }

  getPlatform(): string {
    return this.platform;
  }

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('KA_THEME', this.isDarkTheme ? 'dark' : 'light');
    this.applyTheme();
  }

  isDark(): boolean {
    return this.isDarkTheme;
  }

  private applyPlatform(): void {
    document.body.setAttribute('data-platform', this.platform);
  }

  private applyTheme(): void {
    if (this.isDarkTheme) {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }

  initialize(): void {
    this.applyPlatform();
    this.applyTheme();
  }
}
