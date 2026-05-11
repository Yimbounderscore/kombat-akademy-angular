import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { KAMEO_LIST, Kameo } from '../../data/kameos';
import { GameDataService, MoveData } from '../../services/game-data';
import { InputNotationComponent } from '../../components/input-notation/input-notation';

@Component({
  selector: 'app-kameo-detail',
  imports: [RouterLink, NgFor, NgIf, NgClass, InputNotationComponent],
  templateUrl: './kameo-detail.html',
  styleUrl: './kameo-detail.css',
})
export class KameoDetail implements OnInit {
  kameo: Kameo | null = null;
  moves: MoveData[] = [];
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private gameDataService: GameDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.loadKameo(slug);
    });
  }

  private loadKameo(slug: string): void {
    this.kameo = KAMEO_LIST.find(kameo => kameo.slug === slug) || null;
    this.moves = [];

    if (!this.kameo) {
      this.isLoading = false;
      return;
    }

    this.isLoading = true;

    this.gameDataService.loadKameoMoveList().subscribe({
      next: () => {
        if (this.kameo) {
          this.moves = this.gameDataService.getKameoMovesForKameo(this.kameo.name);
        }
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  getSubcategories(): string[] {
    return [...new Set(this.moves.map(move => move.subcategory))];
  }

  getMovesBySubcategory(subcategory: string): MoveData[] {
    return this.moves.filter(move => move.subcategory === subcategory);
  }

  getBlockClass(blockType: string): string {
    switch (blockType?.toLowerCase()) {
      case 'high': return 'block-high';
      case 'mid': return 'block-mid';
      case 'low': return 'block-low';
      case 'overhead': return 'block-overhead';
      case 'throw': return 'block-throw';
      default: return '';
    }
  }
}
