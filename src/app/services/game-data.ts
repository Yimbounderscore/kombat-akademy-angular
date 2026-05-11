/*
 * GAME DATA SERVICE
 *
 * This service is like a librarian for our game data.
 * It loads the big JSON files ONCE, stores them in memory (cache),
 * and gives you the data instantly on all future requests.
 *
 * HOW CACHING WORKS:
 * 1. First request: Downloads the JSON file, stores it in memory
 * 2. All future requests: Returns the stored data instantly (no download)
 *
 * The key is the "shareReplay(1)" operator - it tells RxJS:
 * "Remember the last result and give it to anyone who asks again."
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';

// Interface: Defines the shape of a move's data
export interface MoveData {
  id: string;
  char_name: string;
  category: string;
  subcategory: string;
  parent_command: string;
  move_name: string;
  command: string;
  hit_damage: string;
  block_damage: string;
  fblock_damage: string;
  block_type: string;
  startup: string;
  active: string;
  recovery: string;
  cancel: string;
  hit_advantage: string;
  block_advantage: string;
  fblock_advantage: string;
  properties: string;
  notes: string;
}

// Interface: Defines the shape of a combo's data
export interface ComboData {
  combo_id: string;
  char_name: string;
  kameo_name: string;
  category: string;
  subcategory: string;
  combo: string;
  damage: string;
  difficulty: string;
  meter: string;
  kameo_meter: string;
  tags: string;
  url: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameDataService {
  // Cached data arrays (stored in memory after first load)
  private moveListData: MoveData[] | null = null;
  private kameoMoveListData: MoveData[] | null = null;
  private comboData: ComboData[] | null = null;

  // Cached Observables (shareReplay remembers the last result)
  private moveListCache$: Observable<MoveData[]> | null = null;
  private kameoMoveListCache$: Observable<MoveData[]> | null = null;
  private comboCache$: Observable<ComboData[]> | null = null;

  constructor(private http: HttpClient) {}

  /*
   * loadMoveList()
   *
   * Loads the move list JSON file. On the first call, it downloads
   * the file and caches the result. On all future calls, it returns
   * the cached result instantly.
   *
   * HOW IT WORKS:
   * 1. If we already have the data (moveListData !== null), return it immediately
   * 2. If we don't have the data yet, make an HTTP request
   * 3. Use shareReplay(1) to cache the Observable's result
   * 4. Use tap() to store the data in our class variable
   */
  loadMoveList(): Observable<MoveData[]> {
    // If already loaded, return cached data immediately
    if (this.moveListData) {
      return of(this.moveListData);
    }

    // If a request is already in progress, return that same Observable
    // This prevents duplicate HTTP requests
    if (this.moveListCache$) {
      return this.moveListCache$;
    }

    // First time: make the HTTP request and cache it
    this.moveListCache$ = this.http.get<any>('assets/data/move_list.json').pipe(
      map(response => {
        // The JSON file has a specific structure from PHPMyAdmin export
        // We need to find the "table" object that contains the actual data
        if (response && response.length > 0) {
          const tableData = response.find(
            (item: any) => item.type === 'table' && item.name === 'move_list_2024_11_19'
          );
          if (tableData && tableData.data) {
            return tableData.data as MoveData[];
          }
        }
        return [];
      }),
      tap(data => {
        // Store the data in our class variable for quick access
        this.moveListData = data;
      }),
      shareReplay(1) // Cache the result for future subscribers
    );

    return this.moveListCache$;
  }

  /*
   * loadKameoMoveList()
   *
   * Same pattern as loadMoveList(), but for kameo moves.
   */
  loadKameoMoveList(): Observable<MoveData[]> {
    if (this.kameoMoveListData) {
      return of(this.kameoMoveListData);
    }

    if (this.kameoMoveListCache$) {
      return this.kameoMoveListCache$;
    }

    this.kameoMoveListCache$ = this.http.get<any>('assets/data/move_list_kameo.json').pipe(
      map(response => {
        if (response && response.length > 0) {
          const tableData = response.find((item: any) => item.type === 'table');
          if (tableData && tableData.data) {
            return tableData.data as MoveData[];
          }
        }
        return [];
      }),
      tap(data => {
        this.kameoMoveListData = data;
      }),
      shareReplay(1)
    );

    return this.kameoMoveListCache$;
  }

  /*
   * loadCombos()
   *
   * Same pattern as loadMoveList(), but for combos.
   */
  loadCombos(): Observable<ComboData[]> {
    if (this.comboData) {
      return of(this.comboData);
    }

    if (this.comboCache$) {
      return this.comboCache$;
    }

    this.comboCache$ = this.http.get<any>('assets/data/combos.json').pipe(
      map(response => {
        if (response && response.length > 0) {
          const tableData = response.find(
            (item: any) => item.type === 'table' && item.name === 'combos'
          );
          if (tableData && tableData.data) {
            return tableData.data as ComboData[];
          }
        }
        return [];
      }),
      tap(data => {
        this.comboData = data;
      }),
      shareReplay(1)
    );

    return this.comboCache$;
  }

  /*
   * QUERY METHODS
   *
   * These methods search through the cached data.
   * They only work AFTER the data has been loaded.
   */

  // Get all moves for a specific character
  getMovesForCharacter(charName: string): MoveData[] {
    if (!this.moveListData) return [];
    return this.moveListData.filter(move => move.char_name === charName);
  }

  // Get moves for a character, filtered by category
  getMovesByCategory(charName: string, category: string): MoveData[] {
    if (!this.moveListData) return [];
    return this.moveListData.filter(move =>
      move.char_name === charName && move.category === category
    );
  }

  // Get combos for a character (optionally filtered by kameo)
  getCombosForCharacter(charName: string, kameoName: string = ''): ComboData[] {
    if (!this.comboData) return [];
    return this.comboData.filter(combo => {
      const matchesChar = combo.char_name === charName;
      const matchesKameo = !kameoName || combo.kameo_name === kameoName || combo.kameo_name === '';
      return matchesChar && matchesKameo;
    });
  }

  // Get combos for a character, filtered by category and kameo
  getCombosByCategory(charName: string, category: string, kameoName: string = ''): ComboData[] {
    if (!this.comboData) return [];
    return this.comboData.filter(combo => {
      const matchesChar = combo.char_name === charName;
      const matchesKameo = !kameoName || combo.kameo_name === kameoName || combo.kameo_name === '';
      const matchesCat = combo.category === category;
      return matchesChar && matchesKameo && matchesCat;
    });
  }

  // Get a list of all unique character names from the move data
  getUniqueCharacters(): string[] {
    if (!this.moveListData) return [];
    const characters = new Set(this.moveListData.map(move => move.char_name));
    return Array.from(characters).sort();
  }

  // Get a list of all unique kameo names from the combo data
  getUniqueKameos(): string[] {
    if (!this.comboData) return [];
    const kameos = new Set(this.comboData.filter(c => c.kameo_name).map(c => c.kameo_name));
    return Array.from(kameos).filter(k => k !== '').sort();
  }
}