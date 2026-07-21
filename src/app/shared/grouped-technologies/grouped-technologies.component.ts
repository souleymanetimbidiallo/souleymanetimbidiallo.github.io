import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { TechnologyId } from '../../models/technology.model';
import { groupTechnologies, TechnologyGroup } from '../technology-group.util';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-grouped-technologies',
  standalone: true,
  imports: [NgFor, TranslatePipe],
  templateUrl: './grouped-technologies.component.html',
  styleUrl: './grouped-technologies.component.css',
})
export class GroupedTechnologiesComponent {
  @Input({ required: true }) technologyIds: TechnologyId[] = [];

  get groups(): TechnologyGroup[] {
    return groupTechnologies(this.technologyIds);
  }
}
