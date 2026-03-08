import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../core/i18n/language.service';
import { TranslatePipe } from '../../core/i18n/translate.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public languageService: LanguageService) {}
}
