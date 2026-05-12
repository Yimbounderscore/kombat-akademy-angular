import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';
import { DialogComponent } from '../dialog/dialog';

@Component({
  selector: 'app-video-player',
  imports: [NgIf, DialogComponent],
  template: `
    <app-dialog [visible]="visible" title="Gameplay" size="large" (close)="close.emit()">
      <div class="video-player-content" *ngIf="currentVideo">
        <div class="video-player-embed">
          <iframe
            [src]="embedUrl"
            width="100%" height="480"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
          </iframe>
        </div>
        <div class="video-player-info">
          <div class="video-player-title">{{ currentVideo.title }}</div>
          <div class="video-player-desc" *ngIf="currentVideo.description">{{ currentVideo.description }}</div>
        </div>
        <div class="video-player-nav" *ngIf="playlist.length > 1">
          <button (click)="prevVideo()" [disabled]="currentIndex <= 0">&larr; Previous</button>
          <span class="video-counter">{{ currentIndex + 1 }} / {{ playlist.length }}</span>
          <button (click)="nextVideo()" [disabled]="currentIndex >= playlist.length - 1">Next &rarr;</button>
        </div>
      </div>
    </app-dialog>
  `,
  styles: [`
    .video-player-content { text-align: center; }
    .video-player-embed { margin-bottom: 16px; }
    .video-player-embed iframe { max-width: 100%; border-radius: 4px; }
    .video-player-info { text-align: left; margin-bottom: 16px; }
    .video-player-title { font-size: 16px; margin-bottom: 4px; }
    .video-player-desc { font-size: 14px; color: rgb(160,160,160); }
    .video-player-nav { display: flex; justify-content: center; align-items: center; gap: 16px; }
    .video-counter { font-size: 14px; color: rgb(128,128,128); }
    button { padding: 8px 16px; background: var(--bg-row-1); border: 1px solid rgb(64,64,64); color: #fff; border-radius: 4px; cursor: pointer; }
    button:hover:not([disabled]) { filter: brightness(125%); }
    button[disabled] { opacity: 0.4; cursor: default; }
    @media screen and (max-width: 1024px) {
      .video-player-embed iframe { height: 280px; }
    }
  `]
})
export class VideoPlayerComponent {
  @Input() visible: boolean = false;
  @Input() playlist: { title: string; description: string; url: string }[] = [];
  @Input() startIndex: number = 0;
  @Output() close = new EventEmitter<void>();

  currentIndex: number = 0;

  get currentVideo() {
    return this.playlist[this.currentIndex];
  }

  get embedUrl(): string {
    if (!this.currentVideo?.url) return '';
    const id = this.getYoutubeId(this.currentVideo.url);
    return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : '';
  }

  ngOnChanges(): void {
    this.currentIndex = this.startIndex;
  }

  prevVideo(): void {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  nextVideo(): void {
    if (this.currentIndex < this.playlist.length - 1) this.currentIndex++;
  }

  private getYoutubeId(url: string): string {
    if (!url) return '';
    const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
    return m ? m[1] : '';
  }
}
