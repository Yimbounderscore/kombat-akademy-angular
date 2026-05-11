import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private platformSubject = new BehaviorSubject<string>('universal');
  private isDarkTheme: boolean = true;

  // Expose as Observable so components can subscribe
  platform$ = this.platformSubject.asObservable();

  constructor() {
    this.loadSettings();
  }

  private loadSettings(): void {
    const savedPlatform = localStorage.getItem('KA_PLATFORM');
    if (savedPlatform) {
      this.platformSubject.next(savedPlatform);
    }

    const savedTheme = localStorage.getItem('KA_THEME');
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
    }
  }

  setPlatform(platform: string): void {
    this.platformSubject.next(platform);
    localStorage.setItem('KA_PLATFORM', platform);
    this.applyPlatform();
  }

  getPlatform(): string {
    return this.platformSubject.value;
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
    document.body.setAttribute('data-platform', this.platformSubject.value);
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