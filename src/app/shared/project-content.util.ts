import { AppLanguage } from '../core/i18n/language.service';
import { Project } from '../models/project.model';

export interface EditorialSection {
  labelKey: string;
  content: string;
}

export function getEditorialSections(project: Project, language: AppLanguage): EditorialSection[] {
  const study = project.editorialCaseStudy;
  if (!study) return [];

  return [
    { labelKey: 'project.case.overview', value: study.overview },
    { labelKey: 'project.case.problem', value: study.problem },
    { labelKey: 'project.case.solution', value: study.solution },
    { labelKey: 'project.case.architecture', value: study.architecture },
    { labelKey: 'project.case.outcome', value: study.outcome },
    { labelKey: 'project.case.nextSteps', value: study.nextSteps },
  ].flatMap((section) =>
    section.value ? [{ labelKey: section.labelKey, content: section.value[language] }] : []
  );
}
