import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProjectStatus } from '../../models/project.model';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-project-status',
  standalone: true,
  imports: [NgIf, TranslatePipe],
  template: `<span class="status" *ngIf="status">{{ 'project.status.' + status | t }}</span>`,
  styles: [`.status{background:rgba(15,23,42,.06);border:1px solid rgba(15,23,42,.1);border-radius:999px;color:#475569;display:inline-block;font-size:.75rem;font-weight:700;padding:.3rem .55rem}`],
})
export class ProjectStatusComponent {
  @Input() status?: ProjectStatus;
}
