import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CHARACTER_LIST } from '../../data/characters';
import { TEAMS } from '../../data/teams';

interface KameoCount { name: string; count: number; }

@Component({
  selector: 'app-teams',
  imports: [NgFor, NgIf],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  characters = CHARACTER_LIST;
  teams = TEAMS;
  kameoPopularity: KameoCount[] = [];

  constructor() {
    const counts: { [key: string]: number } = {};
    for (const charName of Object.keys(this.teams)) {
      for (const k of this.teams[charName]) {
        counts[k] = (counts[k] || 0) + 1;
      }
    }
    this.kameoPopularity = Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  }

  getKameoSlug(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-');
  }
}
