import { Technology, TechnologyId } from '../models/technology.model';

export const TECHNOLOGIES: Technology[] = [
  { id: 'java', label: 'Java', category: 'language', displayPriority: 10 },
  { id: 'java-21', label: 'Java 21', category: 'language', displayPriority: 10 },
  { id: 'php', label: 'PHP', category: 'language', displayPriority: 10 },
  { id: 'php-8-2', label: 'PHP 8.2', category: 'language', displayPriority: 10 },
  { id: 'python', label: 'Python', category: 'language', displayPriority: 10 },
  { id: 'typescript', label: 'TypeScript', category: 'language' },
  { id: 'javascript', label: 'JavaScript', category: 'language' },
  { id: 'spring', label: 'Spring', category: 'backend-framework' },
  { id: 'spring-boot', label: 'Spring Boot', category: 'backend-framework' },
  { id: 'symfony', label: 'Symfony', category: 'backend-framework' },
  { id: 'symfony-components', label: 'Symfony Components', category: 'backend-framework' },
  { id: 'laravel', label: 'Laravel 12', category: 'backend-framework' },
  { id: 'livewire', label: 'Livewire 4', category: 'frontend-framework' },
  { id: 'livewire-volt', label: 'Livewire Volt', category: 'frontend-framework' },
  { id: 'node-js', label: 'Node.js', category: 'backend-framework' },
  { id: 'angular', label: 'Angular', category: 'frontend-framework' },
  { id: 'react', label: 'React', category: 'frontend-framework' },
  { id: 'tailwind-css', label: 'Tailwind CSS', category: 'frontend-framework' },
  { id: 'bootstrap', label: 'Bootstrap', category: 'frontend-framework' },
  { id: 'vite', label: 'Vite', category: 'build-tool' },
  { id: 'twig', label: 'Twig', category: 'templating' },
  { id: 'blade', label: 'Blade', category: 'templating' },
  { id: 'drupal-9', label: 'Drupal 9', category: 'cms', displayPriority: 5 },
  { id: 'drupal', label: 'Drupal', category: 'cms' },
  { id: 'oracle', label: 'Oracle', category: 'database' },
  { id: 'mariadb', label: 'MariaDB', category: 'database' },
  { id: 'postgresql', label: 'PostgreSQL', category: 'database' },
  { id: 'sqlite', label: 'SQLite', category: 'database' },
  { id: 'elasticsearch', label: 'Elasticsearch', category: 'search' },
  { id: 'duckdb', label: 'DuckDB', category: 'database' },
  { id: 'docker', label: 'Docker', category: 'devops' },
  { id: 'gitlab-ci-cd', label: 'GitLab CI/CD', category: 'devops' },
  { id: 'flyway', label: 'Flyway', category: 'database-migration' },
  { id: 'jwt', label: 'JWT', category: 'authentication' },
  { id: 'swagger', label: 'Swagger', category: 'documentation' },
  { id: 'dompdf', label: 'DomPDF', category: 'document-generation' },
  { id: 'vercel', label: 'Vercel', category: 'deployment' },
  { id: 'pandas', label: 'Pandas', category: 'data-processing' },
  { id: 'plotly', label: 'Plotly', category: 'data-visualization' },
  { id: 'parquet', label: 'Parquet', category: 'data-format' },
  { id: 'streamlit', label: 'Streamlit', category: 'data-application-framework' },
];

const TECHNOLOGY_BY_ID = new Map(TECHNOLOGIES.map((technology) => [technology.id, technology]));

export function getTechnology(id: TechnologyId): Technology | undefined {
  return TECHNOLOGY_BY_ID.get(id);
}

export function getTechnologyLabel(id: TechnologyId): string {
  return getTechnology(id)?.label ?? id;
}
