export type TechnologyCategory =
  | 'backend-framework'
  | 'frontend-framework'
  | 'database'
  | 'search'
  | 'cms'
  | 'templating'
  | 'devops'
  | 'data-processing'
  | 'data-visualization'
  | 'data-format'
  | 'data-application-framework'
  | 'database-migration'
  | 'build-tool'
  | 'authentication'
  | 'documentation'
  | 'document-generation'
  | 'infrastructure'
  | 'deployment'
  | 'library'
  | 'tool'
  | 'language';

export interface Technology {
  id: string;
  label: string;
  category: TechnologyCategory;
  displayPriority?: number;
}

export type TechnologyId = string;
