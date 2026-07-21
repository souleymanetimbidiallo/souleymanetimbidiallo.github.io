import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProjectStatus } from '../../models/project.model';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-project-status',
  standalone: true,
  imports: [NgIf, TranslatePipe],
  template: `<span class="status" *ngIf="status">{{ 'project.status.' + status | t }}</span>`,
  styles: [`.status{background:var(--color-secondary-surface);border:1px solid var(--color-border);border-radius:999px;color:var(--color-text-secondary);display:inline-block;font-size:var(--text-xs);font-weight:700;line-height:1.3;padding:.38rem .6rem}`],
})
export class ProjectStatusComponent {
  @Input() status?: ProjectStatus;
}
