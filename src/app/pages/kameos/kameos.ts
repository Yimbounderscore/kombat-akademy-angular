import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { KAMEO_LIST, Kameo } from '../../data/kameos';

@Component({
  selector: 'app-kameos',
  imports: [RouterLink, NgFor],
  templateUrl: './kameos.html',
  styleUrl: './kameos.css',
})
export class Kameos implements OnInit {
  rosterRows: Kameo[][] = [];

  private rosterOrder = [
    'Janet Cage', 'Darrius', 'Sareena', 'Cyrax', 'Kano',
    'Sonya', 'Sektor', 'Frost', 'Jax', 'Khameleon',
    'Ferra', 'Stryker', 'Scorpion', 'Sub-Zero', 'Kung Lao',
    'Shujinko', 'Motaro', 'Goro', 'Tremor', 'Mavado'
  ];

  ngOnInit(): void {
    const roster = this.rosterOrder
      .map(name => KAMEO_LIST.find(kameo => kameo.name === name))
      .filter((kameo): kameo is Kameo => !!kameo);

    this.rosterRows = [roster.slice(0, 10), roster.slice(10, 20)];
  }

  getPortraitBackground(kameo: Kameo): string {
    return `url(/assets/images/kameos/portraits/${kameo.slug}.png), linear-gradient(to top, ${kameo.colorDark}, #000)`;
  }
}
