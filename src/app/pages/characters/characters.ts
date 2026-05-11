import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { CHARACTERS, Character } from '../../data/characters';

@Component({
  selector: 'app-characters',
  imports: [RouterLink, NgFor],
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
      'Reptile', 'Li Mei', 'Kenshi', 'Baraka', 'Geras', 'Omni-Man', 'Peacemaker', 'Ghostface',
      'Sektor', 'Takeda', 'Shang Tsung', 'General Shao', 'Sindel', 'Reiko', 'Raiden', 'Liu Kang',
      'Johnny Cage', 'Kung Lao', 'Ashrah', 'Nitara', 'Havik', 'Quan Chi', 'Homelander'
    ]
      .map(name => CHARACTERS[name])
      .filter((character): character is Character => !!character);

    const half = Math.ceil(roster.length / 2);
    this.characterRows = [roster.slice(0, half), roster.slice(half)];
  }
}
