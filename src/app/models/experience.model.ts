import { LocalizedText } from './localized-text.model';
import { TechnologyId } from './technology.model';

export type EngagementConfidentiality = 'public' | 'limited' | 'confidential';

export interface ProfessionalEngagement {
  id: string;
  projectName: string;
  displayTitle: LocalizedText;
  internalProjectName?: string;
  context: LocalizedText;
  description: LocalizedText;
  technologies: TechnologyId[];
  responsibilities: LocalizedText[];
  confidentiality: EngagementConfidentiality;
  domain?: LocalizedText;
  status?: LocalizedText;
}

export interface ProfessionalExperience {
  id: string;
  company: string;
  role: LocalizedText;
  location: LocalizedText;
  startDate: LocalizedText;
  endDate: LocalizedText;
  summary: LocalizedText;
  companyImage?: string;
  engagements: ProfessionalEngagement[];
  highlights?: LocalizedText[];
}
