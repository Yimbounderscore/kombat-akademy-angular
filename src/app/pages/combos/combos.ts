import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GameDataService, ComboData } from '../../services/game-data';

@Component({
  selector: 'app-combos',
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './combos.html',
  styleUrl: './combos.css',
})
export class Combos implements OnInit {
  characters: string[] = [];
  kameos: string[] = [];
  selectedCharacter: string = '';
  selectedKameo: string = '';
  combos: ComboData[] = [];
  filteredCombos: ComboData[] = [];
  activeTab: string = 'Midscreen';
  isLoading: boolean = true;

  tabs = [
    { id: 'Midscreen', name: 'MIDSCREEN' },
    { id: 'Corner', name: 'CORNER' }
  ];

  constructor(
    private route: ActivatedRoute,
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {
    this.gameDataService.loadCombos().subscribe({
      next: () => {
        this.characters = this.gameDataService.getUniqueCharacters();
        this.kameos = this.gameDataService.getUniqueKameos();
        this.isLoading = false;
        this.route.queryParams.subscribe(params => {
          if (params['character']) {
            this.selectedCharacter = params['character'];
            this.loadCombos();
          }
        });
      },
      error: () => { this.isLoading = false; }
    });
  }

  onCharacterChange(event: Event): void {
    this.selectedCharacter = (event.target as HTMLSelectElement).value;
    this.loadCombos();
  }

  onKameoChange(event: Event): void {
    this.selectedKameo = (event.target as HTMLSelectElement).value;
    this.loadCombos();
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.loadCombos();
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    this.filterCombos();
  }

  private loadCombos(): void {
    if (this.selectedCharacter) {
      this.combos = this.gameDataService.getCombosForCharacter(
        this.selectedCharacter,
        this.selectedKameo
      );
    } else {
      this.combos = [];
    }
    this.filterCombos();
  }

  private filterCombos(): void {
    this.filteredCombos = this.combos.filter(c => c.category === this.activeTab);
  }

  getDifficultyClass(diff: string): string {
    switch (diff?.toLowerCase()) {
      case 'easy': return 'diff-easy';
      case 'medium': return 'diff-medium';
      case 'hard': return 'diff-hard';
      default: return '';
    }
  }

  getSubcategories(): string[] {
    return [...new Set(this.filteredCombos.map(c => c.subcategory))];
  }

  getCombosBySubcategory(sub: string): ComboData[] {
    return this.filteredCombos.filter(c => c.subcategory === sub);
  }
}