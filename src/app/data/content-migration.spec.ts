import { EDUCATION } from './education.data';
import { PROFESSIONAL_EXPERIENCES } from './experience.data';
import { findProjectBySlug, PROJECTS } from './projects.data';

describe('centralized portfolio content', () => {
  it('resolves existing and canonical project slugs', () => {
    const slugs = [
      'gui-plus',
      'gestion-demo',
      'soodou-shop',
      'ag35-website',
      'guinea-roads',
      'examens-gn',
      'api-guinea-geo',
    ];

    slugs.forEach((slug) => expect(findProjectBySlug(slug)).toBeDefined());
    expect(findProjectBySlug('citoykaidi')?.id).toBe('citoykaidi');
    expect(findProjectBySlug('gestion-demo')?.id).toBe('citoykaidi');
  });

  it('stores CitoyKaidi once and keeps its legacy identity as metadata', () => {
    const matches = PROJECTS.filter(
      (project) => project.id === 'citoykaidi' || project.legacySlugs.includes('gestion-demo')
    );

    expect(matches.length).toBe(1);
    expect(matches[0].title.fr).toBe('CitoyKaidi');
  });

  it('keeps Soodou Shop PHP-only in the current stack', () => {
    const project = findProjectBySlug('soodou-shop');

    expect(project?.currentTechnologies).toEqual(['php']);
    expect(project?.currentTechnologies).not.toContain('angular');
  });

  it('separates CitoyKaidi current and planned technologies', () => {
    const project = findProjectBySlug('citoykaidi');

    expect(project?.currentTechnologies).toEqual(['php']);
    expect(project?.plannedTechnologies).toEqual([
      'java', 'spring-boot', 'postgresql', 'flyway', 'jwt', 'swagger', 'docker',
    ]);
    project?.plannedTechnologies.forEach((technology) =>
      expect(project.currentTechnologies).not.toContain(technology)
    );
  });

  it('models four distinct Capgemini engagements with their own stacks', () => {
    const capgemini = PROFESSIONAL_EXPERIENCES.find((experience) => experience.id === 'capgemini');

    expect(capgemini?.engagements.length).toBe(4);
    expect(capgemini?.engagements.find((item) => item.id === 'staffing-cgn')?.technologies)
      .toEqual(['java', 'spring-boot', 'angular']);
    expect(capgemini?.engagements.find((item) => item.id === 'les-bons-clics')?.technologies)
      .toEqual(['php', 'symfony', 'twig']);
    expect(capgemini?.engagements.find((item) => item.id === 'dpgt')?.technologies[0])
      .toBe('drupal-9');
  });

  it('keeps education separate from professional experience', () => {
    expect(EDUCATION.length).toBeGreaterThan(0);
    expect(PROFESSIONAL_EXPERIENCES.some((experience) => experience.id.includes('universite')))
      .toBeFalse();
  });
});
