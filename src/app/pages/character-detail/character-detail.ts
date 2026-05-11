/*
 * CHARACTER DETAIL COMPONENT
 *
 * This is the TypeScript "controller" for the character page.
 * It does 3 things:
 * 1. Reads the character slug from the URL (e.g., "scorpion" from /character/scorpion)
 * 2. Looks up that character in our data
 * 3. Loads their moves and combos from the JSON data files
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { CHARACTERS, CHARACTER_LIST, Character } from '../../data/characters';
import { GameDataService, MoveData, ComboData } from '../../services/game-data';
import { InputNotationComponent } from '../../components/input-notation/input-notation';

@Component({
  selector: 'app-character-detail',
  imports: [RouterLink, NgFor, NgIf, NgClass, InputNotationComponent],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit {
  // The character object (name, slug, stats, etc.)
  character: Character | null = null;

  // Move list data from the JSON file
  moves: MoveData[] = [];
  filteredMoves: MoveData[] = [];
  activeMoveTab: string = 'Basic Attacks';

  // Combo data from the JSON file
  combos: ComboData[] = [];
  filteredCombos: ComboData[] = [];
  activeComboTab: string = 'Midscreen';

  // Loading states
  isLoadingMoves: boolean = true;
  isLoadingCombos: boolean = true;

  // Tab definitions for the move list section
  moveTabs = [
    { id: 'Basic Attacks', name: 'BASIC ATTACKS' },
    { id: 'Special Moves', name: 'SPECIAL MOVES' },
    { id: 'Finishers', name: 'FINISHERS' }
  ];

  // Tab definitions for the combos section
  comboTabs = [
    { id: 'Midscreen', name: 'MIDSCREEN' },
    { id: 'Corner', name: 'CORNER' }
  ];

  constructor(
    private route: ActivatedRoute,
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {
    // Read the ":name" parameter from the URL
    // For example, if the URL is /character/scorpion, slug = "scorpion"
    this.route.params.subscribe(params => {
      const slug = params['name'];
      this.loadCharacter(slug);
    });
  }

  /*
   * loadCharacter()
   *
   * Finds the character by their slug (URL-friendly name).
   * Characters are stored with their display name as the key,
   * but the URL uses the slug. So we loop through all characters
   * to find the one with the matching slug.
   */
  private loadCharacter(slug: string): void {
    // Find character by slug
    this.character = CHARACTER_LIST.find(c => c.slug === slug) || null;

    if (this.character) {
      this.loadMoves();
      this.loadCombos();
    }
  }

  /*
   * loadMoves()
   *
   * Loads the move list data from the JSON file,
   * then filters to only show moves for this character.
   */
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

  /*
   * loadCombos()
   *
   * Loads the combo data from the JSON file,
   * then filters to only show combos for this character.
   */
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

  /*
   * MOVE LIST TAB METHODS
   *
   * These control which category of moves is shown
   * (Basic Attacks, Special Moves, or Finishers)
   */
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

  /*
   * COMBO TAB METHODS
   *
   * These control which category of combos is shown
   * (Midscreen or Corner)
   */
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

  /*
   * HELPER METHODS
   *
   * These convert data values into CSS classes for styling
   */
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

  /*
   * getStatWidth()
   *
   * Converts a stat value (1-5) into a percentage width for the bar.
   * Max stat is 5, so 5 = 100%, 4 = 80%, etc.
   */
  getStatWidth(value: number): number {
    return (value / 5) * 100;
  }
}