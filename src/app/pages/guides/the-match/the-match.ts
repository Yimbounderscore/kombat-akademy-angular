import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { InputNotationComponent } from '../../../components/input-notation/input-notation';

@Component({
  selector: 'app-guide-the-match',
  imports: [RouterLink, NgFor, NgIf, InputNotationComponent],
  templateUrl: './the-match.html',
  styleUrl: './the-match.css',
})
export class GuideTheMatch implements OnInit {
  currentPage = 1;
  pages = [
    { id: 1, title: 'The Match' },
    { id: 2, title: 'Movement' },
    { id: 3, title: 'Moves' },
    { id: 4, title: 'Mechanics' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['pg']) {
        this.currentPage = parseInt(params['pg'], 10);
      }
    });
  }

  setPage(id: number): void {
    this.currentPage = id;
  }

  get prevPage(): number | null {
    return this.currentPage > 1 ? this.currentPage - 1 : null;
  }

  get nextPage(): number | null {
    return this.currentPage < this.pages.length ? this.currentPage + 1 : null;
  }
}