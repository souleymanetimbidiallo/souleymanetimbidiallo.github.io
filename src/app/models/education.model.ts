import { LocalizedText } from './localized-text.model';

export interface Education {
  id: string;
  institution: LocalizedText;
  degree: LocalizedText;
  location: LocalizedText;
  startDate: string;
  endDate: string;
  description: LocalizedText;
  image?: string;
}
