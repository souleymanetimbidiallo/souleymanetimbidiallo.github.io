import { LocalizedText } from './localized-text.model';
import { TechnologyId } from './technology.model';

export type ProjectContext = 'professional' | 'personal' | 'product' | 'open-source';
export type ProjectType =
  | 'enterprise-application'
  | 'saas-platform'
  | 'civic-tech-platform'
  | 'erp-platform'
  | 'data-analytics'
  | 'open-data'
  | 'e-commerce'
  | 'cms-platform'
  | 'media-platform'
  | 'mobile-application'
  | 'developer-api'
  | 'corporate-website';
export type PortfolioFilter = 'web' | 'mobile' | 'data';
export type ProjectStatus =
  | 'completed'
  | 'active-development'
  | 'planned-modernization'
  | 'deployment-preparation'
  | 'archived';
export type ProjectConfidentiality = 'public' | 'limited' | 'confidential';

export interface ProjectCaseSection {
  title: LocalizedText;
  items: LocalizedText[];
}

export interface ProjectProofBlock {
  title: LocalizedText;
  variant: 'code' | 'flow' | 'list';
  lines: LocalizedText[];
}

export interface ProjectCapabilityGroup {
  title: LocalizedText;
  items: LocalizedText[];
}

export interface ProjectEditorialCaseStudy {
  overview?: LocalizedText;
  problem?: LocalizedText;
  solution?: LocalizedText;
  architecture?: LocalizedText;
  keyCapabilities?: ProjectCapabilityGroup[];
  technicalDecisions?: LocalizedText[];
  challenges?: LocalizedText[];
  outcome?: LocalizedText;
  nextSteps?: LocalizedText;
}

export interface Project {
  id: string;
  slug: string;
  legacySlugs: string[];
  previousNames: LocalizedText[];
  title: LocalizedText;
  description: LocalizedText;
  cardSummary?: LocalizedText;
  detailSummary?: LocalizedText;
  role?: LocalizedText;
  impact?: LocalizedText;
  context: ProjectContext;
  projectType: ProjectType;
  portfolioFilter: PortfolioFilter;
  category: LocalizedText;
  domains: LocalizedText[];
  currentTechnologies: TechnologyId[];
  plannedTechnologies: TechnologyId[];
  capabilities: LocalizedText[];
  capabilityGroups?: ProjectCapabilityGroup[];
  status?: ProjectStatus;
  confidentiality?: ProjectConfidentiality;
  featured: boolean;
  repository?: string;
  demo?: string;
  coverImage?: string;
  gallery: string[];
  highlights: LocalizedText[];
  caseStudy?: ProjectCaseSection[];
  proofBlocks?: ProjectProofBlock[];
  editorialCaseStudy?: ProjectEditorialCaseStudy;
  date?: string;
  client?: string;
}
