import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { TechnologyId } from '../../models/technology.model';
import { groupTechnologies, TechnologyGroup } from '../technology-group.util';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
    selector: 'app-grouped-technologies',
    imports: [TranslatePipe],
    templateUrl: './grouped-technologies.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './grouped-technologies.component.css'
})
export class GroupedTechnologiesComponent {
  @Input({ required: true }) technologyIds: TechnologyId[] = [];

  get groups(): TechnologyGroup[] {
    return groupTechnologies(this.technologyIds);
  }
}
