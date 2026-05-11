import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private characters: { [key: string]: any } = {
    'Noob Saibot': { slug: 'noob-saibot', stats: { offense: 4, defense: 3, damage: 4, mobility: 3, range: 4, zoning: 3 } },
    'Cyrax': { slug: 'cyrax', stats: { offense: 3, defense: 4, damage: 3, mobility: 2, range: 3, zoning: 4 } },
    'Ermac': { slug: 'ermac', stats: { offense: 4, defense: 3, damage: 4, mobility: 3, range: 3, zoning: 2 } },
    'Kitana': { slug: 'kitana', stats: { offense: 3, defense: 3, damage: 3, mobility: 4, range: 4, zoning: 4 } },
    'Mileena': { slug: 'mileena', stats: { offense: 4, defense: 2, damage: 4, mobility: 4, range: 3, zoning: 2 } },
    'Tanya': { slug: 'tanya', stats: { offense: 3, defense: 4, damage: 3, mobility: 3, range: 3, zoning: 3 } },
    'Rain': { slug: 'rain', stats: { offense: 3, defense: 3, damage: 3, mobility: 3, range: 4, zoning: 4 } },
    'Smoke': { slug: 'smoke', stats: { offense: 4, defense: 3, damage: 3, mobility: 4, range: 3, zoning: 2 } },
    'Scorpion': { slug: 'scorpion', stats: { offense: 4, defense: 3, damage: 4, mobility: 3, range: 3, zoning: 2 } },
    'Sub-Zero': { slug: 'sub-zero', stats: { offense: 3, defense: 4, damage: 3, mobility: 3, range: 3, zoning: 3 } },
    'Reptile': { slug: 'reptile', stats: { offense: 3, defense: 3, damage: 3, mobility: 4, range: 3, zoning: 3 } },
    'Li Mei': { slug: 'li-mei', stats: { offense: 4, defense: 3, damage: 3, mobility: 3, range: 3, zoning: 2 } },
    'Kenshi': { slug: 'kenshi', stats: { offense: 4, defense: 3, damage: 4, mobility: 3, range: 4, zoning: 2 } },
    'Baraka': { slug: 'baraka', stats: { offense: 4, defense: 3, damage: 4, mobility: 2, range: 3, zoning: 1 } },
    'Geras': { slug: 'geras', stats: { offense: 3, defense: 4, damage: 4, mobility: 2, range: 3, zoning: 3 } },
    'Omni-Man': { slug: 'omni-man', stats: { offense: 4, defense: 4, damage: 4, mobility: 3, range: 3, zoning: 2 } },
    'Peacemaker': { slug: 'peacemaker', stats: { offense: 3, defense: 3, damage: 3, mobility: 3, range: 4, zoning: 4 } },
    'Ghostface': { slug: 'ghostface', stats: { offense: 4, defense: 2, damage: 4, mobility: 3, range: 3, zoning: 2 } },
    'Sektor': { slug: 'sektor', stats: { offense: 3, defense: 4, damage: 3, mobility: 2, range: 4, zoning: 4 } },
    'Takeda': { slug: 'takeda', stats: { offense: 4, defense: 3, damage: 4, mobility: 3, range: 4, zoning: 2 } },
    'Shang Tsung': { slug: 'shang-tsung', stats: { offense: 3, defense: 3, damage: 3, mobility: 3, range: 4, zoning: 4 } },
    'General Shao': { slug: 'general-shao', stats: { offense: 4, defense: 4, damage: 4, mobility: 2, range: 3, zoning: 1 } },
    'Sindel': { slug: 'sindel', stats: { offense: 3, defense: 3, damage: 3, mobility: 3, range: 4, zoning: 4 } },
    'Reiko': { slug: 'reiko', stats: { offense: 3, defense: 4, damage: 3, mobility: 3, range: 3, zoning: 3 } },
    'Raiden': { slug: 'raiden', stats: { offense: 4, defense: 3, damage: 4, mobility: 3, range: 3, zoning: 3 } },
    'Liu Kang': { slug: 'liu-kang', stats: { offense: 4, defense: 3, damage: 4, mobility: 4, range: 3, zoning: 3 } },
    'Johnny Cage': { slug: 'johnny-cage', stats: { offense: 4, defense: 3, damage: 3, mobility: 4, range: 3, zoning: 2 } },
    'Kung Lao': { slug: 'kung-lao', stats: { offense: 4, defense: 3, damage: 3, mobility: 4, range: 3, zoning: 2 } },
    'Ashrah': { slug: 'ashrah', stats: { offense: 3, defense: 3, damage: 3, mobility: 3, range: 4, zoning: 3 } },
    'Nitara': { slug: 'nitara', stats: { offense: 4, defense: 2, damage: 4, mobility: 4, range: 3, zoning: 2 } },
    'Havik': { slug: 'havik', stats: { offense: 3, defense: 4, damage: 3, mobility: 2, range: 3, zoning: 3 } },
    'Quan Chi': { slug: 'quan-chi', stats: { offense: 3, defense: 3, damage: 3, mobility: 2, range: 4, zoning: 4 } },
    'Homelander': { slug: 'homelander', stats: { offense: 4, defense: 4, damage: 4, mobility: 3, range: 3, zoning: 3 } }
  };

  getCharacters(): { [key: string]: any } {
    return this.characters;
  }

  getCharacter(name: string): any {
    return this.characters[name] || null;
  }

  getCharacterStats(name: string): any {
    const character = this.characters[name];
    return character ? character.stats : null;
  }
}
