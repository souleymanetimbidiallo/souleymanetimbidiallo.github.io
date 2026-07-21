import { Technology, TechnologyCategory, TechnologyId } from '../models/technology.model';
import { getTechnology } from '../data/technologies.data';

export interface TechnologyGroup {
  category: TechnologyCategory;
  labelKey: string;
  technologies: Technology[];
}

export const TECHNOLOGY_CATEGORY_LABEL_KEYS: Record<TechnologyCategory, string> = {
  language: 'technology.group.languages',
  'backend-framework': 'technology.group.backend',
  'frontend-framework': 'technology.group.frontend',
  cms: 'technology.group.cms',
  templating: 'technology.group.templating',
  database: 'technology.group.databases',
  search: 'technology.group.search',
  'data-processing': 'technology.group.dataProcessing',
  'data-visualization': 'technology.group.dataVisualization',
  'data-format': 'technology.group.dataFormats',
  'data-application-framework': 'technology.group.dataApplications',
  'database-migration': 'technology.group.databaseMigration',
  devops: 'technology.group.devops',
  'build-tool': 'technology.group.buildTools',
  authentication: 'technology.group.authentication',
  documentation: 'technology.group.documentation',
  'document-generation': 'technology.group.documents',
  infrastructure: 'technology.group.infrastructure',
  deployment: 'technology.group.deployment',
  library: 'technology.group.libraries',
  tool: 'technology.group.tools',
};

export function groupTechnologies(ids: TechnologyId[]): TechnologyGroup[] {
  const groups = new Map<TechnologyCategory, Technology[]>();

  ids.forEach((id) => {
    const technology = getTechnology(id);
    if (!technology) return;
    const group = groups.get(technology.category) ?? [];
    group.push(technology);
    groups.set(technology.category, group);
  });

  return Array.from(groups, ([category, technologies]) => ({
    category,
    labelKey: TECHNOLOGY_CATEGORY_LABEL_KEYS[category],
    technologies,
  }));
}
