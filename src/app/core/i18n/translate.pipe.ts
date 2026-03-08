import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';
import { TRANSLATIONS } from './translations';

@Pipe({
  name: 't',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {}

  transform(key: string): string {
    const lang = this.languageService.language();
    return TRANSLATIONS[key]?.[lang] ?? key;
  }
}
