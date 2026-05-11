import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { Subscription } from 'rxjs';
import { SettingsService } from '../../services/settings';

interface InputPart {
  type: 'svg' | 'text';
  id?: string;
  text?: string;
}

@Component({
  selector: 'app-input-notation',
  standalone: true,
  imports: [NgFor, NgIf, NgClass],
  template: `
    <span class="btn-inputs" [ngClass]="'btn-inputs-' + size">
      <ng-container *ngFor="let part of parts">
        <!-- SVG Icon -->
        <svg *ngIf="part.type === 'svg' && part.id"
             viewBox="0 0 128 128"
             [attr.width]="getSize()"
             [attr.height]="getSize()"
             class="btn-icon"
             style="overflow: visible;">
          <!-- Direction arrows (normalized to 0-128 range) -->
          <path *ngIf="part.id === 'back'" d="M 100 32 L 100 12 L 30 64 L 100 116 L 100 96 L 128 96 L 128 32 Z" fill="currentColor"/>
          <path *ngIf="part.id === 'up'" d="M 64 0 L 128 60 L 96 60 L 96 128 L 32 128 L 32 60 L 0 60 Z" fill="currentColor"/>
          <path *ngIf="part.id === 'down'" d="M 64 128 L 0 68 L 32 68 L 32 0 L 96 0 L 96 68 L 128 68 Z" fill="currentColor"/>
          <path *ngIf="part.id === 'forward'" d="M 28 32 L 28 12 L 0 12 L 0 96 L 28 96 L 28 116 L 98 64 Z" fill="currentColor"/>
          <!-- Diagonal directions -->
          <path *ngIf="part.id === 'up-back'" d="M 8 8 L 60 8 L 60 28 L 28 60 L 8 60 Z M 60 8 L 120 68 L 100 88 L 40 28 L 60 8 Z" fill="currentColor"/>
          <path *ngIf="part.id === 'up-forward'" d="M 120 8 L 68 8 L 68 28 L 100 60 L 120 60 Z M 68 8 L 8 68 L 28 88 L 88 28 L 68 8 Z" fill="currentColor"/>
          <path *ngIf="part.id === 'down-back'" d="M 8 120 L 60 120 L 60 100 L 28 68 L 8 68 Z M 60 120 L 120 60 L 100 40 L 40 100 L 60 120 Z" fill="currentColor"/>
          <path *ngIf="part.id === 'down-forward'" d="M 120 120 L 68 120 L 68 100 L 100 68 L 120 68 Z M 68 120 L 8 60 L 28 40 L 88 100 L 68 120 Z" fill="currentColor"/>
          <!-- Universal numbered buttons -->
          <ng-container *ngIf="part.id === 'btn-1'">
            <circle cx="64" cy="64" r="56" class="universal-circle universal-blue" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" class="universal-number" font-size="72" font-weight="bold">1</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-2'">
            <circle cx="64" cy="64" r="56" class="universal-circle universal-yellow" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" class="universal-number" font-size="72" font-weight="bold">2</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-3'">
            <circle cx="64" cy="64" r="56" class="universal-circle universal-green" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" class="universal-number" font-size="72" font-weight="bold">3</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-4'">
            <circle cx="64" cy="64" r="56" class="universal-circle universal-red" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" class="universal-number" font-size="72" font-weight="bold">4</text>
          </ng-container>
          <!-- PlayStation face buttons -->
          <ng-container *ngIf="part.id === 'ps-square'">
            <rect x="16" y="16" width="96" height="96" rx="8" fill="none" stroke="currentColor" stroke-width="8"/>
          </ng-container>
          <ng-container *ngIf="part.id === 'ps-triangle'">
            <polygon points="64,12 116,116 12,116" fill="none" stroke="currentColor" stroke-width="8"/>
          </ng-container>
          <ng-container *ngIf="part.id === 'ps-cross'">
            <line x1="24" y1="24" x2="104" y2="104" stroke="currentColor" stroke-width="10"/>
            <line x1="104" y1="24" x2="24" y2="104" stroke="currentColor" stroke-width="10"/>
          </ng-container>
          <ng-container *ngIf="part.id === 'ps-circle'">
            <circle cx="64" cy="64" r="46" fill="none" stroke="currentColor" stroke-width="8"/>
          </ng-container>
          <!-- Xbox face buttons -->
          <ng-container *ngIf="part.id === 'xbox-x'">
            <rect x="16" y="16" width="96" height="96" rx="8" fill="none" stroke="#0078d7" stroke-width="8"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="56" font-weight="bold" fill="#0078d7">X</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'xbox-y'">
            <rect x="16" y="16" width="96" height="96" rx="8" fill="none" stroke="#e3a819" stroke-width="8"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="56" font-weight="bold" fill="#e3a819">Y</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'xbox-a'">
            <rect x="16" y="16" width="96" height="96" rx="8" fill="none" stroke="#2db82d" stroke-width="8"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="56" font-weight="bold" fill="#2db82d">A</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'xbox-b'">
            <rect x="16" y="16" width="96" height="96" rx="8" fill="none" stroke="#e8111a" stroke-width="8"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="56" font-weight="bold" fill="#e8111a">B</text>
          </ng-container>
          <!-- Switch face buttons -->
          <ng-container *ngIf="part.id === 'switch-y'">
            <circle cx="64" cy="64" r="46" fill="none" stroke="#2db82d" stroke-width="8"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="56" font-weight="bold" fill="#2db82d">Y</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'switch-x'">
            <circle cx="64" cy="64" r="46" fill="none" stroke="#0078d7" stroke-width="8"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="56" font-weight="bold" fill="#0078d7">X</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'switch-b'">
            <circle cx="64" cy="64" r="46" fill="none" stroke="#e8111a" stroke-width="8"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="56" font-weight="bold" fill="#e8111a">B</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'switch-a'">
            <circle cx="64" cy="64" r="46" fill="none" stroke="#e3a819" stroke-width="8"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="56" font-weight="bold" fill="#e3a819">A</text>
          </ng-container>
          <!-- Shoulder buttons -->
          <ng-container *ngIf="part.id === 'btn-l1'">
            <rect x="4" y="24" width="120" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="40" font-weight="bold" fill="currentColor">L1</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-r1'">
            <rect x="4" y="24" width="120" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="40" font-weight="bold" fill="currentColor">R1</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-l2'">
            <rect x="4" y="24" width="120" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="40" font-weight="bold" fill="currentColor">L2</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-r2'">
            <rect x="4" y="24" width="120" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="40" font-weight="bold" fill="currentColor">R2</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-throw'">
            <rect x="4" y="24" width="120" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="28" font-weight="bold" fill="currentColor">THRW</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-kameo'">
            <rect x="4" y="24" width="120" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="28" font-weight="bold" fill="currentColor">KAM</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-ss'">
            <rect x="4" y="24" width="120" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="40" font-weight="bold" fill="currentColor">SS</text>
          </ng-container>
          <ng-container *ngIf="part.id === 'btn-ex'">
            <rect x="4" y="24" width="120" height="80" rx="12" fill="none" stroke="currentColor" stroke-width="6"/>
            <text x="64" y="68" text-anchor="middle" dominant-baseline="central" font-size="40" font-weight="bold" fill="currentColor">EX</text>
          </ng-container>
        </svg>
        <!-- Text separator (+ or ,) -->
        <span *ngIf="part.type === 'text'"
              class="btn-inputs-separator">{{ part.text }}</span>
      </ng-container>
    </span>
  `,
  styles: [`
    :host { display: inline; }
    .btn-inputs { display: inline-flex; align-items: center; flex-wrap: wrap; vertical-align: middle; gap: 1px; }
    .btn-inputs-separator { padding: 0 1px; font-size: 0.85em; color: rgba(255,255,255,0.6); }
    .btn-icon { box-sizing: border-box; flex-shrink: 0; color: #fff; }
    .btn-inputs-xs .btn-icon { height: 16px; width: 16px; }
    .btn-inputs-s .btn-icon { height: 22px; width: 22px; }
    .btn-inputs-m .btn-icon { height: 30px; width: 30px; }
    .btn-inputs-l .btn-icon { height: 42px; width: 42px; }
    .btn-inputs-xl .btn-icon { height: 58px; width: 58px; }
    .universal-number { fill: #fff; paint-order: stroke fill; stroke: rgba(0,0,0,0.8); stroke-linejoin: round; stroke-width: 6; }
    .universal-circle { stroke: #000; paint-order: stroke fill; stroke-linejoin: round; }
    .universal-blue { fill: #4040e0; }
    .universal-yellow { fill: #e0e040; }
    .universal-green { fill: #40e040; }
    .universal-red { fill: #e04040; }
  `]
})
export class InputNotationComponent implements OnInit, OnDestroy {
  @Input() input: string = '';
  @Input() size: string = 's';

  parts: InputPart[] = [];
  private platform: string = 'universal';
  private platformSub!: Subscription;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.platformSub = this.settingsService.platform$.subscribe(platform => {
      this.platform = platform;
      this.parts = this.parseInput(this.input);
    });
  }

  ngOnDestroy(): void {
    if (this.platformSub) {
      this.platformSub.unsubscribe();
    }
  }

  private parseInput(value: string): InputPart[] {
    if (!value) return [];
    const parts: InputPart[] = [];
    const tokens = value.split(/(\s+|,|\+)/);
    for (const token of tokens) {
      const trimmed = token.trim();
      if (!trimmed) continue;
      if (trimmed === '+' || trimmed === ',' || trimmed === ' ') {
        parts.push({ type: 'text', text: trimmed === ' ' ? ' ' : trimmed });
        continue;
      }
      const upperToken = trimmed.toUpperCase();
      const iconId = this.getIconForToken(upperToken);
      if (iconId) {
        parts.push({ type: 'svg', id: iconId });
      } else {
        parts.push({ type: 'text', text: trimmed });
      }
    }
    return parts;
  }

  private getIconForToken(token: string): string | null {
    const directions: { [key: string]: string } = {
      'B': 'back', 'U': 'up', 'D': 'down', 'F': 'forward',
      'U+B': 'up-back', 'U+F': 'up-forward', 'D+B': 'down-back', 'D+F': 'down-forward',
      'UB': 'up-back', 'UF': 'up-forward', 'DB': 'down-back', 'DF': 'down-forward'
    };
    if (directions[token]) return directions[token];

    if (this.platform === 'plain-text') return null;

    if (['1', '2', '3', '4'].includes(token)) {
      if (this.platform === 'playstation') {
        return { '1': 'ps-square', '2': 'ps-triangle', '3': 'ps-cross', '4': 'ps-circle' }[token] || null;
      } else if (this.platform === 'xbox') {
        return { '1': 'xbox-x', '2': 'xbox-y', '3': 'xbox-a', '4': 'xbox-b' }[token] || null;
      } else if (this.platform === 'switch') {
        return { '1': 'switch-y', '2': 'switch-x', '3': 'switch-b', '4': 'switch-a' }[token] || null;
      }
      return 'btn-' + token;
    }

    const specialMap: { [key: string]: string } = {
      'L1': 'btn-l1', 'R1': 'btn-r1', 'L2': 'btn-l2', 'R2': 'btn-r2',
      'THROW': 'btn-throw', 'KAMEO': 'btn-kameo', 'SS': 'btn-ss', 'EX': 'btn-ex'
    };
    return specialMap[token] || null;
  }

  getSize(): number {
    const sizes: { [key: string]: number } = { 'xs': 16, 's': 22, 'm': 30, 'l': 42, 'xl': 58 };
    return sizes[this.size] || 22;
  }
}