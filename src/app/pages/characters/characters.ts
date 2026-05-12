import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { CHARACTERS, Character } from '../../data/characters';
import { DialogComponent } from '../../components/dialog/dialog';

@Component({
  selector: 'app-characters',
  imports: [RouterLink, NgFor, NgIf, DialogComponent],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters implements OnInit {
  characterRows: Character[][] = [];
  selectedCharacter: Character | null = null;
  statsVisible: boolean = false;

  ngOnInit(): void {
    this.loadCharacters();
  }

  showStats(character: Character): void {
    this.selectedCharacter = character;
    this.statsVisible = true;
  }

  hideStats(): void {
    this.statsVisible = false;
    this.selectedCharacter = null;
  }

  getStatWidth(value: number): number {
    return (value / 5) * 100;
  }

  getStatValue(key: string): number {
    if (!this.selectedCharacter?.stats) return 0;
    const s = this.selectedCharacter.stats as any;
    return s[key] || 0;
  }

  private loadCharacters(): void {
    const roster = [
      'Noob Saibot', 'Cyrax', 'Ermac', 'Kitana', 'Mileena', 'Tanya', 'Rain', 'Smoke', 'Scorpion', 'Sub-Zero',
      'Reptile', 'Li Mei', 'Kenshi', 'Baraka', 'Geras', 'Omni-Man', 'Peacemaker', 'Ghostface',
      'Sektor', 'Takeda', 'Shang Tsung', 'General Shao', 'Sindel', 'Reiko', 'Raiden', 'Liu Kang',
      'Johnny Cage', 'Kung Lao', 'Ashrah', 'Nitara', 'Havik', 'Quan Chi', 'Homelander',
      'Conan', 'T-1000'
    ]
      .map(name => CHARACTERS[name])
      .filter((character): character is Character => !!character);

    const half = Math.ceil(roster.length / 2);
    this.characterRows = [roster.slice(0, half), roster.slice(half)];
  }
}
