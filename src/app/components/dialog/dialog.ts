import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog',
  imports: [NgIf],
  template: `
    <div class="dialog-overlay" *ngIf="visible" (click)="close.emit()">
      <div class="dialog-box" [class.dialog-large]="size === 'large'" (click)="$event.stopPropagation()">
        <div class="dialog-header">
          <span>{{ title }}</span>
          <i class="fa-solid fa-times" (click)="close.emit()"></i>
        </div>
        <div class="dialog-body">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dialog-overlay {
      position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
      background: rgba(0, 0, 0, 0.9); z-index: 10000;
      display: flex; align-items: center; justify-content: center;
    }
    .dialog-box {
      background: rgb(16, 16, 16); border-radius: 8px;
      max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.75);
    }
    .dialog-large { max-width: 900px; }
    .dialog-header {
      display: flex; justify-content: space-between; align-items: center;
      padding: 16px 24px; border-bottom: 1px solid rgba(255,255,255,0.1);
      font-size: 20px; font-weight: 400;
    }
    .dialog-header i { cursor: pointer; font-size: 20px; color: rgb(128,128,128); }
    .dialog-header i:hover { color: #fff; }
    .dialog-body { padding: 24px; }
  `]
})
export class DialogComponent {
  @Input() visible: boolean = false;
  @Input() title: string = '';
  @Input() size: string = '';
  @Output() close = new EventEmitter<void>();
}
