import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [TranslatePipe, RouterModule],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './footer.component.css'
})
export class FooterComponent { readonly year = new Date().getFullYear(); }
