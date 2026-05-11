import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GameDataService, MoveData } from '../../services/game-data';

@Component({
  selector: 'app-move-list',
  imports: [NgFor, NgIf, NgClass, FormsModule],
  templateUrl: './move-list.html',
  styleUrl: './move-list.css',
})
export class MoveList implements OnInit {
  characters: string[] = [];
  kameos: string[] = [];
  selectedCharacter: string = '';
  moves: MoveData[] = [];
  filteredMoves: MoveData[] = [];
  activeTab: string = 'Basic Attacks';
  isLoading: boolean = true;

  tabs = [
    { id: 'Basic Attacks', name: 'BASIC ATTACKS' },
    { id: 'Special Moves', name: 'SPECIAL MOVES' },
    { id: 'Finishers', name: 'FINISHERS' }
  ];

  constructor(
    private route: ActivatedRoute,
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {
    this.gameDataService.loadMoveList().subscribe({
      next: () => {
        this.characters = this.gameDataService.getUniqueCharacters();
        this.isLoading = false;
        this.route.queryParams.subscribe(params => {
          if (params['character']) {
            this.selectedCharacter = params['character'];
            this.loadMoves();
          }
        });
      },
      error: () => { this.isLoading = false; }
    });
  }

  onCharacterChange(event: Event): void {
    this.selectedCharacter = (event.target as HTMLSelectElement).value;
    this.loadMoves();
  }

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    this.filterMoves();
  }

  private loadMoves(): void {
    if (this.selectedCharacter) {
      this.moves = this.gameDataService.getMovesForCharacter(this.selectedCharacter);
    } else {
      this.moves = [];
    }
    this.filterMoves();
  }

  private filterMoves(): void {
    this.filteredMoves = this.moves.filter(m => m.category === this.activeTab);
  }

  getSubcategories(): string[] {
    return [...new Set(this.filteredMoves.map(m => m.subcategory))];
  }

  getMovesBySubcategory(sub: string): MoveData[] {
    return this.filteredMoves.filter(m => m.subcategory === sub);
  }

  getBlockClass(bt: string): string {
    switch (bt?.toLowerCase()) {
      case 'high': return 'block-high';
      case 'mid': return 'block-mid';
      case 'low': return 'block-low';
      case 'overhead': return 'block-overhead';
      case 'throw': return 'block-throw';
      default: return '';
    }
  }
}