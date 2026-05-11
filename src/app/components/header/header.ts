import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = false;

  constructor(private settingsService: SettingsService) {}

  selectPlatform(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.settingsService.setPlatform(select.value);
  }

  toggleTheme(): void {
    this.settingsService.toggleTheme();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}