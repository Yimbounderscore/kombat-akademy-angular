import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { GameDataService, GameplayData } from '../../services/game-data';
import { CHARACTER_LIST } from '../../data/characters';
import { KAMEO_LIST } from '../../data/kameos';

@Component({
  selector: 'app-gameplay',
  imports: [NgFor, NgIf],
  templateUrl: './gameplay.html',
  styleUrl: './gameplay.css',
})
export class Gameplay implements OnInit {
  videos: GameplayData[] = [];
  filteredVideos: GameplayData[] = [];
  characters = CHARACTER_LIST;
  kameos = KAMEO_LIST;
  selectedCharacter: string = '';
  selectedKameo: string = '';
  isLoading: boolean = true;

  constructor(private gameDataService: GameDataService) {}

  ngOnInit(): void {
    this.gameDataService.loadGameplay().subscribe({
      next: (data) => {
        this.videos = data.filter(v => v.url);
        this.filterVideos();
        this.isLoading = false;
      },
      error: () => { this.isLoading = false; }
    });
  }

  filterVideos(): void {
    this.filteredVideos = this.videos.filter(v => {
      if (this.selectedCharacter && !v.characters?.includes(this.selectedCharacter)) return false;
      if (this.selectedKameo && !v.kameos?.includes(this.selectedKameo)) return false;
      return true;
    });
  }

  onCharacterChange(event: Event): void {
    this.selectedCharacter = (event.target as HTMLSelectElement).value;
    this.filterVideos();
  }

  onKameoChange(event: Event): void {
    this.selectedKameo = (event.target as HTMLSelectElement).value;
    this.filterVideos();
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  }

  getYoutubeId(url: string): string {
    if (!url) return '';
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  }
}
