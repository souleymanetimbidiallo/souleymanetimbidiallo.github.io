import { PROFESSIONAL_EXPERIENCES } from './experience.data';
import { ProfessionalEngagement, ProfessionalExperience } from '../models/experience.model';

export interface EnterpriseProjectView {
  employer: ProfessionalExperience;
  engagement: ProfessionalEngagement;
}

export function getEnterpriseProjectsFromExperiences(): EnterpriseProjectView[] {
  return PROFESSIONAL_EXPERIENCES.flatMap((employer) =>
    employer.engagements.map((engagement) => ({ employer, engagement }))
  );
}
