import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CHARACTER_LIST } from '../../data/characters';

interface Tier {
  name: string;
  color: string;
  characters: string[];
}

@Component({
  selector: 'app-tier-maker',
  imports: [NgFor, NgIf],
  templateUrl: './tier-maker.html',
  styleUrl: './tier-maker.css',
})
export class TierMaker implements OnInit {
  title = 'My Tier List';
  author = '';
  currentDate = new Date().toLocaleDateString();

  tiers: Tier[] = [
    { name: 'S', color: '#ff4444', characters: [] },
    { name: 'A', color: '#ff8c00', characters: [] },
    { name: 'B', color: '#ffd700', characters: [] },
    { name: 'C', color: '#4caf50', characters: [] },
    { name: 'D', color: '#2196f3', characters: [] }
  ];

  pool: string[] = [];

  ngOnInit(): void {
    this.pool = CHARACTER_LIST.map(c => c.slug);
  }

  addToTier(tierIndex: number, slug: string): void {
    this.tiers[tierIndex].characters.push(slug);
    this.pool = this.pool.filter(s => s !== slug);
  }

  removeFromTier(tierIndex: number, slug: string): void {
    this.tiers[tierIndex].characters = this.tiers[tierIndex].characters.filter(s => s !== slug);
    this.pool.push(slug);
  }

  getCharName(slug: string): string {
    const c = CHARACTER_LIST.find(ch => ch.slug === slug);
    return c ? c.name : slug;
  }

  reset(): void {
    this.pool = [...this.tiers.flatMap(t => t.characters), ...this.pool];
    this.tiers.forEach(t => t.characters = []);
  }
}