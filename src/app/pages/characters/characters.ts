import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CHARACTERS, Character } from '../../data/characters';

@Component({
  selector: 'app-characters',
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters implements OnInit {
  characterRows: Character[][] = [];

  ngOnInit(): void {
    this.loadCharacters();
  }

  private loadCharacters(): void {
    const roster = [
      'Noob Saibot', 'Cyrax', 'Ermac', 'Kitana', 'Mileena', 'Tanya', 'Rain', 'Smoke', 'Scorpion', 'Sub-Zero',
      'Reptile', 'Li Mei', 'Kenshi', 'Baraka', 'Geras', 'Omni-Man', 'Peacemaker', 'Ghostface', '', '',
      'Sektor', 'Takeda', 'Shang Tsung', 'General Shao', 'Sindel', 'Reiko', 'Raiden', 'Liu Kang', '',
      'Johnny Cage', 'Kung Lao', 'Ashrah', 'Nitara', 'Havik', 'Quan Chi', 'Homelander', '', ''
    ];

    const half = 19;
    const row1: Character[] = [];
    const row2: Character[] = [];

    for (let i = 0; i < half; i++) {
      const name = roster[i];
      if (name) {
        row1.push(CHARACTERS[name]);
      } else {
        row1.push(null as any);
      }
    }

    for (let i = half; i < roster.length; i++) {
      const name = roster[i];
      if (name) {
        row2.push(CHARACTERS[name]);
      } else {
        row2.push(null as any);
      }
    }

    this.characterRows = [row1, row2];
  }
}