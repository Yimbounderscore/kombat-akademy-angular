/*
 * CHARACTER DETAIL COMPONENT
 *
 * This is the TypeScript "controller" for the character page.
 * It does 3 things:
 * 1. Reads the character slug from the URL (e.g., "scorpion" from /character/scorpion)
 * 2. Looks up that character in our data
 * 3. Loads their moves, combos, kameos, and gameplay from the JSON data files
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { CHARACTERS, CHARACTER_LIST, Character } from '../../data/characters';
import { KAMEOS } from '../../data/kameos';
import { TEAMS } from '../../data/teams';
import { STRATEGY } from '../../data/strategy';
import { GameDataService, MoveData, ComboData } from '../../services/game-data';
import { InputNotationComponent } from '../../components/input-notation/input-notation';

interface GameplayVideo {
  title: string;
  description: string;
  url: string;
  date: string;
}

@Component({
  selector: 'app-character-detail',
  imports: [RouterLink, NgFor, NgIf, NgClass, InputNotationComponent],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {
  character: Character | null = null;

  get strategyData() {
    if (!this.character) return null;
    return STRATEGY[this.character.name] || null;
  }

  moves: MoveData[] = [];
  filteredMoves: MoveData[] = [];
  activeMoveTab: string = 'Basic Attacks';

  combos: ComboData[] = [];
  filteredCombos: ComboData[] = [];
  activeComboTab: string = 'Midscreen';

  recommendedKameos: string[] = [];
  gameplayVideos: GameplayVideo[] = [];

  isLoadingMoves: boolean = true;
  isLoadingCombos: boolean = true;
  isLoadingGameplay: boolean = true;

  moveTabs = [
    { id: 'Basic Attacks', name: 'BASIC ATTACKS' },
    { id: 'Special Moves', name: 'SPECIAL MOVES' },
    { id: 'Finishers', name: 'FINISHERS' }
  ];

  comboTabs = [
    { id: 'Midscreen', name: 'MIDSCREEN' },
    { id: 'Corner', name: 'CORNER' }
  ];

  constructor(
    private route: ActivatedRoute,
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['name'];
      this.loadCharacter(slug);
    });
  }

  private loadCharacter(slug: string): void {
    this.character = null;
    this.moves = [];
    this.filteredMoves = [];
    this.combos = [];
    this.filteredCombos = [];
    this.recommendedKameos = [];
    this.gameplayVideos = [];
    this.isLoadingMoves = true;
    this.isLoadingCombos = true;
    this.isLoadingGameplay = true;

    this.character = CHARACTER_LIST.find(c => c.slug === slug) || null;

    if (this.character) {
      this.recommendedKameos = TEAMS[this.character.name] || [];
      this.loadMoves();
      this.loadCombos();
      this.loadGameplay();
    } else {
      this.isLoadingMoves = false;
      this.isLoadingCombos = false;
      this.isLoadingGameplay = false;
    }
  }

  private loadMoves(): void {
    this.gameDataService.loadMoveList().subscribe({
      next: () => {
        if (this.character) {
          this.moves = this.gameDataService.getMovesForCharacter(this.character.name);
          this.filterMoves();
        }
        this.isLoadingMoves = false;
      },
      error: () => { this.isLoadingMoves = false; }
    });
  }

  private loadCombos(): void {
    this.gameDataService.loadCombos().subscribe({
      next: () => {
        if (this.character) {
          this.combos = this.gameDataService.getCombosForCharacter(this.character.name);
          this.filterCombos();
        }
        this.isLoadingCombos = false;
      },
      error: () => { this.isLoadingCombos = false; }
    });
  }

  private loadGameplay(): void {
    this.gameDataService.loadGameplay().subscribe({
      next: (videos) => {
        if (this.character) {
          this.gameplayVideos = videos.filter(v =>
            v.character_page && v.character_page.includes(this.character!.name)
          );
        }
        this.isLoadingGameplay = false;
      },
      error: () => { this.isLoadingGameplay = false; }
    });
  }

  setActiveMoveTab(tabId: string): void {
    this.activeMoveTab = tabId;
    this.filterMoves();
  }

  private filterMoves(): void {
    this.filteredMoves = this.moves.filter(m => m.category === this.activeMoveTab);
  }

  getMoveSubcategories(): string[] {
    return [...new Set(this.filteredMoves.map(m => m.subcategory))];
  }

  getMovesBySubcategory(sub: string): MoveData[] {
    return this.filteredMoves.filter(m => m.subcategory === sub);
  }

  setActiveComboTab(tabId: string): void {
    this.activeComboTab = tabId;
    this.filterCombos();
  }

  private filterCombos(): void {
    this.filteredCombos = this.combos.filter(c => c.category === this.activeComboTab);
  }

  getComboSubcategories(): string[] {
    return [...new Set(this.filteredCombos.map(c => c.subcategory))];
  }

  getCombosBySubcategory(sub: string): ComboData[] {
    return this.filteredCombos.filter(c => c.subcategory === sub);
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

  getDifficultyClass(diff: string): string {
    switch (diff?.toLowerCase()) {
      case 'easy': return 'diff-easy';
      case 'medium': return 'diff-medium';
      case 'hard': return 'diff-hard';
      default: return '';
    }
  }

  getStatWidth(value: number): number {
    return (value / 5) * 100;
  }

  getKameoSlug(name: string): string {
    const kameo = KAMEOS[name];
    return kameo ? kameo.slug : name.toLowerCase().replace(/\s+/g, '-');
  }

  getKameoPortrait(name: string): string {
    return `/assets/images/kameos/portraits/${this.getKameoSlug(name)}.png`;
  }
}
