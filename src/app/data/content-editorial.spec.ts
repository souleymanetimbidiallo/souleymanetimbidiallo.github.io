import { getEnterpriseProjectsFromExperiences } from './enterprise-projects.selector';
import { PROFESSIONAL_EXPERIENCES } from './experience.data';
import { findProjectBySlug, PROJECTS } from './projects.data';
import { groupTechnologies } from '../shared/technology-group.util';
import { getEditorialSections } from '../shared/project-content.util';

describe('Phase 2 editorial content', () => {
  it('derives enterprise projects from experience without portfolio duplicates', () => {
    const enterpriseProjects = getEnterpriseProjectsFromExperiences();
    const engagementIds = enterpriseProjects.map(({ engagement }) => engagement.id);

    expect(engagementIds).toEqual([
      'phenix', 'staffing-cgn', 'les-bons-clics', 'dpgt', 'die-immosonnic',
    ]);
    engagementIds.forEach((id) => expect(PROJECTS.some((project) => project.id === id)).toBeFalse());
  });

  it('keeps PHENIX as the internal name with a recruiter-readable title', () => {
    const phenix = PROFESSIONAL_EXPERIENCES[0].engagements[0];

    expect(phenix.internalProjectName).toBe('PHENIX');
    expect(phenix.displayTitle.en).toBe('French National Traffic Violation Management Platform');
  });

  it('keeps distinct Capgemini technology stacks', () => {
    const engagements = PROFESSIONAL_EXPERIENCES.find(({ id }) => id === 'capgemini')!.engagements;

    expect(engagements.find(({ id }) => id === 'staffing-cgn')!.technologies)
      .toEqual(['java', 'spring-boot', 'angular']);
    expect(engagements.find(({ id }) => id === 'les-bons-clics')!.technologies)
      .toEqual(['php', 'symfony', 'twig']);
    expect(engagements.find(({ id }) => id === 'dpgt')!.technologies)
      .toEqual(['drupal-9', 'php', 'symfony-components']);
  });

  it('groups PHENIX technologies into precise, non-empty categories', () => {
    const phenix = PROFESSIONAL_EXPERIENCES[0].engagements[0];
    const groups = groupTechnologies(phenix.technologies);

    expect(groups.every((group) => group.technologies.length > 0)).toBeTrue();
    expect(groups.find(({ category }) => category === 'language')?.technologies.map(({ id }) => id))
      .toContain('java');
    expect(groups.find(({ category }) => category === 'database')?.technologies.map(({ id }) => id))
      .toEqual(['oracle', 'mariadb']);
    expect(groups.find(({ category }) => category === 'search')?.technologies.map(({ id }) => id))
      .toEqual(['elasticsearch']);
    expect(groups.find(({ category }) => category === 'devops')?.technologies.map(({ id }) => id))
      .toEqual(['docker', 'gitlab-ci-cd']);
  });

  it('keeps Drupal 9 first in DPGT grouped presentation', () => {
    const dpgt = getEnterpriseProjectsFromExperiences()
      .find(({ engagement }) => engagement.id === 'dpgt')!.engagement;
    const groups = groupTechnologies(dpgt.technologies);

    expect(groups[0].technologies[0].id).toBe('drupal-9');
  });

  it('keeps CitoyKaidi current and planned groupings separate', () => {
    const project = findProjectBySlug('citoykaidi')!;
    const currentIds = groupTechnologies(project.currentTechnologies)
      .flatMap((group) => group.technologies.map(({ id }) => id));
    const plannedIds = groupTechnologies(project.plannedTechnologies)
      .flatMap((group) => group.technologies.map(({ id }) => id));

    expect(currentIds).toEqual(['php']);
    expect(plannedIds).not.toContain('php');
    expect(currentIds.some((id) => plannedIds.includes(id))).toBeFalse();
  });

  it('classifies the enriched product and data projects', () => {
    expect(findProjectBySlug('yiidein')?.projectType).toBe('saas-platform');
    expect(findProjectBySlug('kaglob-erp')?.projectType).toBe('erp-platform');
    expect(findProjectBySlug('cee-2026')?.projectType).toBe('data-analytics');
  });

  it('does not label CEE 2026 as an AI project', () => {
    const project = findProjectBySlug('cee-2026')!;
    const editorialText = JSON.stringify({
      title: project.title,
      description: project.description,
      cardSummary: project.cardSummary,
      category: project.category,
      domains: project.domains,
    }).toLowerCase();

    expect(editorialText).not.toContain('artificial intelligence');
    expect(editorialText).not.toContain('intelligence artificielle');
  });

  it('keeps Soodou Shop PHP-only', () => {
    expect(findProjectBySlug('soodou-shop')?.currentTechnologies).toEqual(['php']);
  });

  it('omits empty editorial case-study sections', () => {
    const sections = getEditorialSections(findProjectBySlug('citoykaidi')!, 'en');

    expect(sections.map(({ labelKey }) => labelKey)).toEqual([
      'project.case.overview', 'project.case.nextSteps',
    ]);
  });

  it('preserves canonical, legacy, and portfolio-filter discovery', () => {
    expect(findProjectBySlug('citoykaidi')?.id).toBe('citoykaidi');
    expect(findProjectBySlug('gestion-demo')?.id).toBe('citoykaidi');
    expect(PROJECTS.filter(({ portfolioFilter }) => portfolioFilter === 'web').length).toBeGreaterThan(0);
    expect(PROJECTS.filter(({ portfolioFilter }) => portfolioFilter === 'mobile').length).toBeGreaterThan(0);
    expect(PROJECTS.filter(({ portfolioFilter }) => portfolioFilter === 'data').length).toBeGreaterThan(0);
  });
});
