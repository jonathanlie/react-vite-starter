import { Knowledge } from '@/types/knowledge';

export const KNOWLEDGE_DATA: Knowledge[] = [
  // Frontend
  {
    id: 'frontend',
    title: 'Frontend',
    category: 'root',
    markdownFile: 'frontend.mdx',
    level: 'advanced',
    proficiencyScore: 7,
  },

  // Frontend - Frameworks / Libraries
  {
    id: 'frameworks-libraries',
    title: 'Frameworks / Libraries',
    category: 'frontend',
    markdownFile: 'frameworks-libraries.mdx',
    related: 'frontend',
    level: 'intermediate',
    proficiencyScore: 10,
  },

  // Frontend - Frameworks / Libraries - Angular
  {
    id: 'angular',
    title: 'Angular',
    category: 'frontend',
    markdownFile: 'angular.mdx',
    related: 'frameworks-libraries',
    level: 'advanced',
    tags: ['frontend', 'framework'],
    proficiencyScore: 5,
  },

  // Frontend - Frameworks / Libraries - AngularJS
  {
    id: 'angularjs',
    title: 'AngularJS',
    category: 'frontend',
    markdownFile: 'angularjs.mdx',
    related: 'frameworks-libraries',
    level: 'intermediate',
    tags: ['frontend', 'framework', 'legacy'],
    proficiencyScore: 10,
  },

  // Frontend - Frameworks / Libraries - React
  {
    id: 'react',
    title: 'React',
    category: 'frontend',
    markdownFile: 'react.mdx',
    related: 'frameworks-libraries',
    level: 'intermediate',
    tags: ['frontend', 'framework', 'mobile'],
    proficiencyScore: 5,
  },

  // Frontend - Frameworks / Libraries - React Native
  {
    id: 'react-native',
    title: 'React Native',
    category: 'frontend',
    markdownFile: 'react-native.mdx',
    related: 'frameworks-libraries',
    level: 'intermediate',
    tags: ['frontend', 'framework', 'mobile'],
    proficiencyScore: 7,
  },

  // Frontend - Frameworks / Libraries - VueJS
  {
    id: 'vuejs',
    title: 'VueJS',
    category: 'frontend',
    markdownFile: 'vuejs.mdx',
    related: 'frameworks-libraries',
    level: 'intermediate',
    tags: ['frontend', 'framework'],
    proficiencyScore: 3,
  },

  // Frontend - State Management
  {
    id: 'state-management',
    title: 'State Management',
    category: 'frontend',
    markdownFile: 'state-management.mdx',
    related: 'frontend',
    level: 'intermediate',
    proficiencyScore: 3,
  },

  // Frontend - State Management - Reflux
  {
    id: 'reflux',
    title: 'Reflux',
    category: 'frontend',
    markdownFile: 'reflux.mdx',
    related: 'state-management',
    level: 'intermediate',
    tags: ['frontend', 'state-management'],
    proficiencyScore: 3,
  },

  // Frontend - State Management - NgRx
  {
    id: 'ngrx',
    title: 'NgRx',
    category: 'frontend',
    markdownFile: 'ngrx.mdx',
    related: 'state-management',
    level: 'intermediate',
    tags: ['frontend', 'state-management', 'angular'],
    proficiencyScore: 7,
  },

  // Frontend - State Management - Redux
  {
    id: 'redux',
    title: 'Redux',
    category: 'frontend',
    markdownFile: 'redux.mdx',
    related: 'state-management',
    level: 'intermediate',
    tags: ['frontend', 'state-management'],
    proficiencyScore: 9,
  },

  // Frontend - State Management - Zustand
  {
    id: 'zustand',
    title: 'Zustand',
    category: 'frontend',
    markdownFile: 'zustand.mdx',
    related: 'state-management',
    level: 'intermediate',
    tags: ['frontend', 'state-management', 'react'],
    proficiencyScore: 10,
  },

  // Frontend - Typescript
  {
    id: 'typescript',
    title: 'Typescript',
    category: 'frontend',
    markdownFile: 'typescript.mdx',
    related: 'frontend',
    level: 'intermediate',
    proficiencyScore: 4,
  },

  // Frontend - Typescript - Generics
  {
    id: 'typescript-generics',
    title: 'Generics',
    category: 'frontend',
    markdownFile: 'typescript-generics.mdx',
    related: 'typescript',
    level: 'intermediate',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 6,
  },

  // Frontend - Typescript - Utility Types
  {
    id: 'typescript-utility-types',
    title: 'Utility Types',
    category: 'frontend',
    markdownFile: 'typescript-utility-types.mdx',
    related: 'typescript',
    level: 'intermediate',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 6,
  },

  // Frontend - Typescript - Type Guards
  {
    id: 'typescript-type-guards',
    title: 'Type Guards',
    category: 'frontend',
    markdownFile: 'typescript-type-guards.mdx',
    related: 'typescript',
    level: 'intermediate',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 5,
  },

  // Frontend - Styling
  {
    id: 'styling',
    title: 'Styling',
    category: 'frontend',
    markdownFile: 'styling.mdx',
    related: 'frontend',
    level: 'intermediate',
    proficiencyScore: 3,
  },

  // Frontend - Styling - Tailwind CSS
  {
    id: 'tailwind-css',
    title: 'Tailwind CSS',
    category: 'frontend',
    markdownFile: 'tailwind-css.mdx',
    related: 'styling',
    level: 'intermediate',
    tags: ['frontend', 'styling', 'css'],
    proficiencyScore: 3,
  },

  // Frontend - Styling - CSS-in-JS
  {
    id: 'css-in-js',
    title: 'CSS-in-JS',
    category: 'frontend',
    markdownFile: 'css-in-js.mdx',
    related: 'styling',
    level: 'intermediate',
    tags: ['frontend', 'styling'],
    proficiencyScore: 3,
  },

  // Frontend - Styling - CSS Preprocessors
  {
    id: 'css-preprocessors',
    title: 'CSS Preprocessors',
    category: 'frontend',
    markdownFile: 'css-preprocessors.mdx',
    related: 'styling',
    level: 'intermediate',
    tags: ['frontend', 'styling', 'css'],
    proficiencyScore: 6,
  },

  // Frontend - Build Tools
  {
    id: 'build-tools',
    title: 'Build Tools',
    category: 'frontend',
    markdownFile: 'build-tools.mdx',
    related: 'frontend',
    level: 'intermediate',
    proficiencyScore: 1,
  },

  // Frontend - Build Tools - Vite
  {
    id: 'vite',
    title: 'Vite',
    category: 'frontend',
    markdownFile: 'vite.mdx',
    related: 'build-tools',
    level: 'intermediate',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 3,
  },

  // Frontend - Build Tools - Webpack
  {
    id: 'webpack',
    title: 'Webpack',
    category: 'frontend',
    markdownFile: 'webpack.mdx',
    related: 'build-tools',
    level: 'intermediate',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 3,
  },

  // Frontend - Build Tools - Babel
  {
    id: 'babel',
    title: 'Babel',
    category: 'frontend',
    markdownFile: 'babel.mdx',
    related: 'build-tools',
    level: 'intermediate',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 1,
  },

  // Frontend - Internationalization - i18n
  {
    id: 'internationalization-i18n',
    title: 'Internationalization - i18n',
    category: 'frontend',
    markdownFile: 'internationalization-i18n.mdx',
    related: 'frontend',
    level: 'advanced',
    tags: ['frontend', 'i18n', 'accessibility'],
    proficiencyScore: 10,
  },

  // Frontend - Internationalization - i18n - RTL (Right-to-Left)
  {
    id: 'rtl-right-to-left',
    title: 'RTL (Right-to-Left)',
    category: 'frontend',
    markdownFile: 'rtl-right-to-left.mdx',
    related: 'internationalization-i18n',
    level: 'advanced',
    tags: ['frontend', 'i18n', 'rtl', 'accessibility'],
    proficiencyScore: 9,
  },

  // Frontend - Accessibility - a11y
  {
    id: 'accessibility-a11y',
    title: 'Accessibility - a11y',
    category: 'frontend',
    markdownFile: 'accessibility-a11y.mdx',
    related: 'frontend',
    level: 'intermediate',
    proficiencyScore: 7,
  },

  // Frontend - Accessibility - a11y - aria attributes
  {
    id: 'aria-attributes',
    title: 'aria attributes',
    category: 'frontend',
    markdownFile: 'aria-attributes.mdx',
    related: 'accessibility-a11y',
    level: 'intermediate',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 1,
  },

  // Frontend - Accessibility - a11y - keyboard navigation
  {
    id: 'keyboard-navigation',
    title: 'keyboard navigation',
    category: 'frontend',
    markdownFile: 'keyboard-navigation.mdx',
    related: 'accessibility-a11y',
    level: 'intermediate',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 5,
  },

  // Frontend - Accessibility - a11y - voiceover
  {
    id: 'voiceover',
    title: 'voiceover',
    category: 'frontend',
    markdownFile: 'voiceover.mdx',
    related: 'accessibility-a11y',
    level: 'intermediate',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 6,
  },

  // Frontend - Accessibility - a11y - semantic HTML
  {
    id: 'semantic-html',
    title: 'semantic HTML',
    category: 'frontend',
    markdownFile: 'semantic-html.mdx',
    related: 'accessibility-a11y',
    level: 'intermediate',
    tags: ['frontend', 'accessibility', 'a11y', 'html'],
    proficiencyScore: 9,
  },

  // Frontend - Frontend Testing
  {
    id: 'frontend-testing',
    title: 'Frontend Testing',
    category: 'frontend',
    markdownFile: 'frontend-testing.mdx',
    related: 'frontend',
    level: 'intermediate',
    proficiencyScore: 6,
  },

  // Frontend - Frontend Testing - Jest
  {
    id: 'jest',
    title: 'Jest',
    category: 'frontend',
    markdownFile: 'jest.mdx',
    related: 'frontend-testing',
    level: 'intermediate',
    tags: ['frontend', 'testing'],
    proficiencyScore: 3,
  },

  // Frontend - Frontend Testing - Jasmine
  {
    id: 'jasmine',
    title: 'Jasmine',
    category: 'frontend',
    markdownFile: 'jasmine.mdx',
    related: 'frontend-testing',
    level: 'intermediate',
    tags: ['frontend', 'testing'],
    proficiencyScore: 4,
  },

  // Frontend - Frontend Testing - Playwright
  {
    id: 'playwright',
    title: 'Playwright',
    category: 'frontend',
    markdownFile: 'playwright.mdx',
    related: 'frontend-testing',
    level: 'intermediate',
    tags: ['frontend', 'testing', 'e2e'],
    proficiencyScore: 6,
  },

  // Frontend - Web Performance
  {
    id: 'web-performance',
    title: 'Web Performance',
    category: 'frontend',
    markdownFile: 'web-performance.mdx',
    related: 'frontend',
    level: 'advanced',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 6,
  },

  // Frontend - Web Performance - Code splitting
  {
    id: 'code-splitting',
    title: 'Code splitting',
    category: 'frontend',
    markdownFile: 'code-splitting.mdx',
    related: 'web-performance',
    level: 'advanced',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 1,
  },

  // Frontend - Web Performance - Lazy loading
  {
    id: 'lazy-loading',
    title: 'Lazy loading',
    category: 'frontend',
    markdownFile: 'lazy-loading.mdx',
    related: 'web-performance',
    level: 'advanced',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 5,
  },

  // Backend
  {
    id: 'backend',
    title: 'Backend',
    category: 'root',
    markdownFile: 'backend.mdx',
    level: 'intermediate',
    proficiencyScore: 5,
  },

  // Backend - Languages / Runtimes
  {
    id: 'languages-runtimes',
    title: 'Languages / Runtimes',
    category: 'backend',
    markdownFile: 'languages-runtimes.mdx',
    related: 'backend',
    level: 'intermediate',
    proficiencyScore: 10,
  },

  // Backend - Languages / Runtimes - Ruby
  {
    id: 'ruby',
    title: 'Ruby',
    category: 'backend',
    markdownFile: 'ruby.mdx',
    related: 'languages-runtimes',
    level: 'intermediate',
    tags: ['backend', 'language'],
    proficiencyScore: 7,
  },

  // Backend - Languages / Runtimes - Python
  {
    id: 'python',
    title: 'Python',
    category: 'backend',
    markdownFile: 'python.mdx',
    related: 'languages-runtimes',
    level: 'intermediate',
    tags: ['backend', 'language'],
    proficiencyScore: 5,
  },

  // Backend - Frameworks / Libraries (Ruby)
  {
    id: 'frameworks-libraries-ruby',
    title: 'Frameworks / Libraries (Ruby)',
    category: 'backend',
    markdownFile: 'frameworks-libraries-ruby.mdx',
    related: 'backend',
    level: 'intermediate',
    proficiencyScore: 6,
  },

  // Backend - Frameworks / Libraries (Ruby) - Ruby on Rails
  {
    id: 'ruby-on-rails',
    title: 'Ruby on Rails',
    category: 'backend',
    markdownFile: 'ruby-on-rails.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'framework', 'ruby'],
    proficiencyScore: 10,
  },

  // Backend - Frameworks / Libraries (Ruby) - Sidekiq
  {
    id: 'sidekiq',
    title: 'Sidekiq',
    category: 'backend',
    markdownFile: 'sidekiq.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'ruby', 'background-jobs'],
    proficiencyScore: 3,
  },

  // Backend - Frameworks / Libraries (Ruby) - ActionCable
  {
    id: 'actioncable',
    title: 'ActionCable',
    category: 'backend',
    markdownFile: 'actioncable.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'ruby', 'rails', 'websocket'],
    proficiencyScore: 8,
  },

  // Backend - Frameworks / Libraries (Ruby) - Dry::Validation
  {
    id: 'dry-validation',
    title: 'Dry::Validation',
    category: 'backend',
    markdownFile: 'dry-validation.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'ruby', 'validation'],
    proficiencyScore: 8,
  },

  // Backend - Frameworks / Libraries (Ruby) - MJML - Liquid
  {
    id: 'mjml-liquid',
    title: 'MJML - Liquid',
    category: 'backend',
    markdownFile: 'mjml-liquid.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'email', 'templates'],
    proficiencyScore: 3,
  },

  // Backend - Messaging / Event Streaming
  {
    id: 'messaging-event-streaming',
    title: 'Messaging / Event Streaming',
    category: 'backend',
    markdownFile: 'messaging-event-streaming.mdx',
    related: 'backend',
    level: 'intermediate',
    proficiencyScore: 1,
  },

  // Backend - Messaging / Event Streaming - Kafka
  {
    id: 'kafka',
    title: 'Kafka',
    category: 'backend',
    markdownFile: 'kafka.mdx',
    related: 'messaging-event-streaming',
    level: 'intermediate',
    tags: ['backend', 'messaging', 'event-streaming'],
    proficiencyScore: 10,
  },

  // Backend - Authentication / Authorization
  {
    id: 'authentication-authorization',
    title: 'Authentication / Authorization',
    category: 'backend',
    markdownFile: 'authentication-authorization.mdx',
    related: 'backend',
    level: 'intermediate',
    proficiencyScore: 4,
  },

  // Backend - Authentication / Authorization - OAuth2
  {
    id: 'oauth2',
    title: 'OAuth2',
    category: 'backend',
    markdownFile: 'oauth2.mdx',
    related: 'authentication-authorization',
    level: 'intermediate',
    tags: ['backend', 'authentication', 'authorization'],
    proficiencyScore: 5,
  },

  // Backend - Authentication / Authorization - JWT
  {
    id: 'jwt',
    title: 'JWT',
    category: 'backend',
    markdownFile: 'jwt.mdx',
    related: 'authentication-authorization',
    level: 'intermediate',
    tags: ['backend', 'authentication'],
    proficiencyScore: 3,
  },

  // Backend - Authentication / Authorization - Single Sign-On
  {
    id: 'single-sign-on',
    title: 'Single Sign-On',
    category: 'backend',
    markdownFile: 'single-sign-on.mdx',
    related: 'authentication-authorization',
    level: 'intermediate',
    tags: ['backend', 'authentication', 'sso'],
    proficiencyScore: 10,
  },

  // Backend - API Design
  {
    id: 'api-design',
    title: 'API Design',
    category: 'backend',
    markdownFile: 'api-design.mdx',
    related: 'backend',
    level: 'intermediate',
    tags: ['backend', 'api', 'openapi'],
    proficiencyScore: 10,
  },

  // Backend - API Design - REST
  {
    id: 'rest',
    title: 'REST',
    category: 'backend',
    markdownFile: 'rest.mdx',
    related: 'api-design',
    level: 'intermediate',
    tags: ['backend', 'api'],
    proficiencyScore: 1,
  },

  // Backend - API Design - GraphQL
  {
    id: 'graphql',
    title: 'GraphQL',
    category: 'backend',
    markdownFile: 'graphql.mdx',
    related: 'api-design',
    level: 'intermediate',
    tags: ['backend', 'api'],
    proficiencyScore: 2,
  },

  // Backend - API Design - gRPC
  {
    id: 'grpc',
    title: 'gRPC',
    category: 'backend',
    markdownFile: 'grpc.mdx',
    related: 'api-design',
    level: 'intermediate',
    tags: ['backend', 'api'],
    proficiencyScore: 10,
  },

  // Backend - Backend Testing
  {
    id: 'backend-testing',
    title: 'Backend Testing',
    category: 'backend',
    markdownFile: 'backend-testing.mdx',
    related: 'backend',
    level: 'intermediate',
    proficiencyScore: 10,
  },

  // Backend - Backend Testing - RSpec
  {
    id: 'rspec',
    title: 'RSpec',
    category: 'backend',
    markdownFile: 'rspec.mdx',
    related: 'backend-testing',
    level: 'intermediate',
    tags: ['backend', 'testing', 'ruby'],
    proficiencyScore: 1,
  },

  // Backend - Backend Testing - Postman
  {
    id: 'postman',
    title: 'Postman',
    category: 'backend',
    markdownFile: 'postman.mdx',
    related: 'backend-testing',
    level: 'intermediate',
    tags: ['backend', 'testing', 'api'],
    proficiencyScore: 10,
  },

  // Backend - Backend Testing - FactoryBot
  {
    id: 'factorybot',
    title: 'FactoryBot',
    category: 'backend',
    markdownFile: 'factorybot.mdx',
    related: 'backend-testing',
    level: 'intermediate',
    tags: ['backend', 'testing', 'ruby'],
    proficiencyScore: 10,
  },

  // Backend - Backend Testing - Gatling
  {
    id: 'gatling',
    title: 'Gatling',
    category: 'backend',
    markdownFile: 'gatling.mdx',
    related: 'backend-testing',
    level: 'intermediate',
    tags: ['backend', 'testing', 'performance'],
    proficiencyScore: 3,
  },

  // Devops
  {
    id: 'devops',
    title: 'DevOps',
    category: 'root',
    markdownFile: 'devops.mdx',
    level: 'intermediate',
    proficiencyScore: 4,
  },

  // Devops - Infrastructure as Code (IaC)
  {
    id: 'infrastructure-as-code-iac',
    title: 'Infrastructure as Code (IaC)',
    category: 'devops',
    markdownFile: 'infrastructure-as-code-iac.mdx',
    related: 'devops',
    level: 'intermediate',
    proficiencyScore: 4,
  },

  // Devops - Infrastructure as Code (IaC) - Terraform
  {
    id: 'terraform',
    title: 'Terraform',
    category: 'devops',
    markdownFile: 'terraform.mdx',
    related: 'infrastructure-as-code-iac',
    level: 'intermediate',
    tags: ['devops', 'iac'],
    proficiencyScore: 8,
  },

  // Devops - Containerization & Orchestration
  {
    id: 'containerization-orchestration',
    title: 'Containerization & Orchestration',
    category: 'devops',
    markdownFile: 'containerization-orchestration.mdx',
    related: 'devops',
    level: 'intermediate',
    proficiencyScore: 5,
  },

  // Devops - Containerization & Orchestration - Docker
  {
    id: 'docker',
    title: 'Docker',
    category: 'devops',
    markdownFile: 'docker.mdx',
    related: 'containerization-orchestration',
    level: 'intermediate',
    tags: ['devops', 'containerization'],
    proficiencyScore: 4,
  },

  // Devops - Containerization & Orchestration - Docker - Docker Compose
  {
    id: 'docker-compose',
    title: 'Docker Compose',
    category: 'devops',
    markdownFile: 'docker-compose.mdx',
    related: 'docker',
    level: 'intermediate',
    tags: ['devops', 'containerization', 'docker'],
    proficiencyScore: 5,
  },

  // Devops - Containerization & Orchestration - Kubernetes (k8s)
  {
    id: 'kubernetes-k8s',
    title: 'Kubernetes (k8s)',
    category: 'devops',
    markdownFile: 'kubernetes-k8s.mdx',
    related: 'containerization-orchestration',
    level: 'intermediate',
    tags: ['devops', 'orchestration'],
    proficiencyScore: 7,
  },

  // Devops - Cloud
  {
    id: 'cloud',
    title: 'Cloud',
    category: 'devops',
    markdownFile: 'cloud.mdx',
    related: 'devops',
    level: 'intermediate',
    proficiencyScore: 8,
  },

  // Devops - Cloud - AWS
  {
    id: 'aws',
    title: 'AWS',
    category: 'devops',
    markdownFile: 'aws.mdx',
    related: 'cloud',
    level: 'intermediate',
    tags: ['devops', 'cloud'],
    proficiencyScore: 8,
  },

  // Devops - Cloud - AWS - EC2
  {
    id: 'ec2',
    title: 'EC2',
    category: 'devops',
    markdownFile: 'ec2.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws'],
    proficiencyScore: 2,
  },

  // Devops - Cloud - AWS - S3
  {
    id: 's3',
    title: 'S3',
    category: 'devops',
    markdownFile: 's3.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws'],
    proficiencyScore: 6,
  },

  // Devops - Cloud - AWS - RDS
  {
    id: 'rds',
    title: 'RDS',
    category: 'devops',
    markdownFile: 'rds.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws', 'database'],
    proficiencyScore: 7,
  },

  // Devops - Cloud - AWS - IAM
  {
    id: 'iam',
    title: 'IAM',
    category: 'devops',
    markdownFile: 'iam.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws', 'security'],
    proficiencyScore: 10,
  },

  // Devops - Cloud - AWS - VPC
  {
    id: 'vpc',
    title: 'VPC',
    category: 'devops',
    markdownFile: 'vpc.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws', 'networking'],
    proficiencyScore: 3,
  },

  // Devops - CI/CD
  {
    id: 'ci-cd',
    title: 'CI/CD',
    category: 'devops',
    markdownFile: 'ci-cd.mdx',
    related: 'devops',
    level: 'intermediate',
    proficiencyScore: 6,
  },

  // Devops - CI/CD - Github Actions
  {
    id: 'github-actions',
    title: 'Github Actions',
    category: 'devops',
    markdownFile: 'github-actions.mdx',
    related: 'ci-cd',
    level: 'intermediate',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 9,
  },

  // Devops - CI/CD - Jenkins
  {
    id: 'jenkins',
    title: 'Jenkins',
    category: 'devops',
    markdownFile: 'jenkins.mdx',
    related: 'ci-cd',
    level: 'intermediate',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 6,
  },

  // Devops - CI/CD - CircleCI
  {
    id: 'circleci',
    title: 'CircleCI',
    category: 'devops',
    markdownFile: 'circleci.mdx',
    related: 'ci-cd',
    level: 'intermediate',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 4,
  },

  // Tooling
  {
    id: 'tooling',
    title: 'Tooling',
    category: 'root',
    markdownFile: 'tooling.mdx',
    level: 'intermediate',
    proficiencyScore: 7,
  },

  // Tooling - Version Control
  {
    id: 'version-control',
    title: 'Version Control',
    category: 'tooling',
    markdownFile: 'version-control.mdx',
    related: 'tooling',
    level: 'intermediate',
    proficiencyScore: 10,
  },

  // Tooling - Version Control - Git
  {
    id: 'git',
    title: 'Git',
    category: 'tooling',
    markdownFile: 'git.mdx',
    related: 'version-control',
    level: 'intermediate',
    tags: ['tooling', 'version-control'],
    proficiencyScore: 9,
  },

  // Tooling - Observability
  {
    id: 'observability',
    title: 'Observability',
    category: 'tooling',
    markdownFile: 'observability.mdx',
    related: 'tooling',
    level: 'intermediate',
    tags: ['tooling', 'monitoring'],
    proficiencyScore: 8,
  },

  // Tooling - Observability - Grafana
  {
    id: 'grafana',
    title: 'Grafana',
    category: 'tooling',
    markdownFile: 'grafana.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 8,
  },

  // Tooling - Observability - Appsignal
  {
    id: 'appsignal',
    title: 'Appsignal',
    category: 'tooling',
    markdownFile: 'appsignal.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 10,
  },

  // Tooling - Observability - Rollbar
  {
    id: 'rollbar',
    title: 'Rollbar',
    category: 'tooling',
    markdownFile: 'rollbar.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 2,
  },

  // Tooling - Observability - Datadog
  {
    id: 'datadog',
    title: 'Datadog',
    category: 'tooling',
    markdownFile: 'datadog.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 6,
  },

  // Tooling - Observability - Prometheus
  {
    id: 'prometheus',
    title: 'Prometheus',
    category: 'tooling',
    markdownFile: 'prometheus.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 6,
  },

  // Tooling - Content (Headless CMS)
  {
    id: 'content-headless-cms',
    title: 'Content (Headless CMS)',
    category: 'tooling',
    markdownFile: 'content-headless-cms.mdx',
    related: 'tooling',
    level: 'intermediate',
    proficiencyScore: 1,
  },

  // Tooling - Content (Headless CMS) - PhraseApp
  {
    id: 'phraseapp',
    title: 'PhraseApp',
    category: 'tooling',
    markdownFile: 'phraseapp.mdx',
    related: 'content-headless-cms',
    level: 'intermediate',
    tags: ['tooling', 'i18n', 'cms'],
    proficiencyScore: 3,
  },

  // Tooling - Content (Headless CMS) - Prismic
  {
    id: 'prismic',
    title: 'Prismic',
    category: 'tooling',
    markdownFile: 'prismic.mdx',
    related: 'content-headless-cms',
    level: 'intermediate',
    tags: ['tooling', 'cms'],
    proficiencyScore: 2,
  },

  // Tooling - Testing (Cross-Browser)
  {
    id: 'testing-cross-browser',
    title: 'Testing (Cross-Browser)',
    category: 'tooling',
    markdownFile: 'testing-cross-browser.mdx',
    related: 'tooling',
    level: 'intermediate',
    proficiencyScore: 8,
  },

  // Tooling - Testing (Cross-Browser) - Browserstack
  {
    id: 'browserstack',
    title: 'Browserstack',
    category: 'tooling',
    markdownFile: 'browserstack.mdx',
    related: 'testing-cross-browser',
    level: 'intermediate',
    tags: ['tooling', 'testing'],
    proficiencyScore: 1,
  },

  // Tooling - Third-Party APIs / Services
  {
    id: 'third-party-apis-services',
    title: 'Third-Party APIs / Services',
    category: 'tooling',
    markdownFile: 'third-party-apis-services.mdx',
    related: 'tooling',
    level: 'intermediate',
    proficiencyScore: 5,
  },

  // Tooling - Third-Party APIs / Services - Geospatial
  {
    id: 'geospatial',
    title: 'Geospatial',
    category: 'tooling',
    markdownFile: 'geospatial.mdx',
    related: 'third-party-apis-services',
    level: 'intermediate',
    tags: ['tooling', 'api', 'maps'],
    proficiencyScore: 8,
  },

  // Tooling - Third-Party APIs / Services - Geospatial - Google Maps
  {
    id: 'google-maps',
    title: 'Google Maps',
    category: 'tooling',
    markdownFile: 'google-maps.mdx',
    related: 'geospatial',
    level: 'intermediate',
    tags: ['tooling', 'api', 'maps', 'geospatial'],
    proficiencyScore: 1,
  },

  // Tooling - Third-Party APIs / Services - Geospatial - Mapbox
  {
    id: 'mapbox',
    title: 'Mapbox',
    category: 'tooling',
    markdownFile: 'mapbox.mdx',
    related: 'geospatial',
    level: 'intermediate',
    tags: ['tooling', 'api', 'maps', 'geospatial'],
    proficiencyScore: 3,
  },

  // Tooling - Third-Party APIs / Services - Payment
  {
    id: 'payment',
    title: 'Payment',
    category: 'tooling',
    markdownFile: 'payment.mdx',
    related: 'third-party-apis-services',
    level: 'intermediate',
    proficiencyScore: 10,
  },

  // Tooling - Third-Party APIs / Services - Payment - Stripe
  {
    id: 'stripe',
    title: 'Stripe',
    category: 'tooling',
    markdownFile: 'stripe.mdx',
    related: 'payment',
    level: 'intermediate',
    tags: ['tooling', 'api', 'payment'],
    proficiencyScore: 5,
  },

  // Tooling - Third-Party APIs / Services - Communication
  {
    id: 'communication',
    title: 'Communication',
    category: 'tooling',
    markdownFile: 'communication.mdx',
    related: 'third-party-apis-services',
    level: 'intermediate',
    proficiencyScore: 9,
  },

  // Tooling - Third-Party APIs / Services - Communication - Twilio
  {
    id: 'twilio',
    title: 'Twilio',
    category: 'tooling',
    markdownFile: 'twilio.mdx',
    related: 'communication',
    level: 'intermediate',
    tags: ['tooling', 'api', 'communication'],
    proficiencyScore: 5,
  },

  // Tooling - Third-Party APIs / Services - Communication - Mailgun
  {
    id: 'mailgun',
    title: 'Mailgun',
    category: 'tooling',
    markdownFile: 'mailgun.mdx',
    related: 'communication',
    level: 'intermediate',
    tags: ['tooling', 'api', 'communication', 'email'],
    proficiencyScore: 7,
  },

  // Tooling - AI
  {
    id: 'ai',
    title: 'AI',
    category: 'tooling',
    markdownFile: 'ai.mdx',
    related: 'tooling',
    level: 'intermediate',
    proficiencyScore: 6,
  },

  // Tooling - AI - Cursor
  {
    id: 'cursor',
    title: 'Cursor',
    category: 'tooling',
    markdownFile: 'cursor.mdx',
    related: 'ai',
    level: 'intermediate',
    tags: ['tooling', 'ai', 'ide'],
    proficiencyScore: 8,
  },

  // Tooling - AI - Gemini
  {
    id: 'gemini',
    title: 'Gemini',
    category: 'tooling',
    markdownFile: 'gemini.mdx',
    related: 'ai',
    level: 'intermediate',
    tags: ['tooling', 'ai'],
    proficiencyScore: 7,
  },

  // Concepts
  {
    id: 'concepts',
    title: 'Concepts',
    category: 'root',
    markdownFile: 'concepts.mdx',
    level: 'advanced',
    proficiencyScore: 6,
  },

  // Concepts - General Principles
  {
    id: 'general-principles',
    title: 'General Principles',
    category: 'concept',
    markdownFile: 'general-principles.mdx',
    related: 'concepts',
    level: 'advanced',
    proficiencyScore: 1,
  },

  // Concepts - General Principles - Idempotency
  {
    id: 'idempotency',
    title: 'Idempotency',
    category: 'concept',
    markdownFile: 'idempotency.mdx',
    related: 'general-principles',
    level: 'advanced',
    tags: ['concept', 'principle'],
    proficiencyScore: 8,
  },

  // Concepts - General Principles - SOLID
  {
    id: 'solid',
    title: 'SOLID',
    category: 'concept',
    markdownFile: 'solid.mdx',
    related: 'general-principles',
    level: 'advanced',
    tags: ['concept', 'principle'],
    proficiencyScore: 8,
  },

  // Concepts - General Principles - DRY
  {
    id: 'dry',
    title: 'DRY',
    category: 'concept',
    markdownFile: 'dry.mdx',
    related: 'general-principles',
    level: 'advanced',
    tags: ['concept', 'principle'],
    proficiencyScore: 5,
  },

  // Concepts - General Principles - Multitenancy
  {
    id: 'multitenancy',
    title: 'Multitenancy',
    category: 'concept',
    markdownFile: 'multitenancy.mdx',
    related: 'general-principles',
    level: 'advanced',
    tags: ['concept', 'architecture', 'saas'],
    proficiencyScore: 9,
  },

  // Concepts - Design Patterns
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    category: 'concept',
    markdownFile: 'design-patterns.mdx',
    related: 'concepts',
    level: 'advanced',
    proficiencyScore: 2,
  },

  // Concepts - Design Patterns - Chain of Responsibility
  {
    id: 'chain-of-responsibility',
    title: 'Chain of Responsibility',
    category: 'concept',
    markdownFile: 'chain-of-responsibility.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 4,
  },

  // Concepts - Design Patterns - Adapter
  {
    id: 'adapter',
    title: 'Adapter',
    category: 'concept',
    markdownFile: 'adapter.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 2,
  },

  // Concepts - Design Patterns - Singleton
  {
    id: 'singleton',
    title: 'Singleton',
    category: 'concept',
    markdownFile: 'singleton.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 6,
  },

  // Concepts - Design Patterns - Factory
  {
    id: 'factory',
    title: 'Factory',
    category: 'concept',
    markdownFile: 'factory.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 6,
  },

  // Concepts - Design Patterns - Observer
  {
    id: 'observer',
    title: 'Observer',
    category: 'concept',
    markdownFile: 'observer.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 3,
  },

  // Concepts - Design Patterns - Decorators
  {
    id: 'decorators',
    title: 'Decorators',
    category: 'concept',
    markdownFile: 'decorators.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 7,
  },

  // Database
  {
    id: 'database',
    title: 'Database',
    category: 'root',
    markdownFile: 'database.mdx',
    level: 'intermediate',
    proficiencyScore: 6,
  },

  // Database - Relational
  {
    id: 'relational',
    title: 'Relational',
    category: 'database',
    markdownFile: 'relational.mdx',
    related: 'database',
    level: 'intermediate',
    proficiencyScore: 9,
  },

  // Database - Relational - PostgreSQL
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    category: 'database',
    markdownFile: 'postgresql.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational'],
    proficiencyScore: 3,
  },

  // Database - Relational - Indexing
  {
    id: 'indexing',
    title: 'Indexing',
    category: 'database',
    markdownFile: 'indexing.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational', 'optimization'],
    proficiencyScore: 9,
  },

  // Database - Relational - Locking
  {
    id: 'locking',
    title: 'Locking',
    category: 'database',
    markdownFile: 'locking.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational'],
    proficiencyScore: 9,
  },

  // Database - Relational - Transactions (ACID)
  {
    id: 'transactions-acid',
    title: 'Transactions (ACID)',
    category: 'database',
    markdownFile: 'transactions-acid.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational'],
    proficiencyScore: 7,
  },

  // Database - Relational - Sharding
  {
    id: 'sharding',
    title: 'Sharding',
    category: 'database',
    markdownFile: 'sharding.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational', 'scaling'],
    proficiencyScore: 9,
  },

  // Database - In-Memory
  {
    id: 'in-memory',
    title: 'In-Memory',
    category: 'database',
    markdownFile: 'in-memory.mdx',
    related: 'database',
    level: 'intermediate',
    proficiencyScore: 9,
  },

  // Database - In-Memory - Redis
  {
    id: 'redis',
    title: 'Redis',
    category: 'database',
    markdownFile: 'redis.mdx',
    related: 'in-memory',
    level: 'intermediate',
    tags: ['database', 'nosql', 'caching', 'queues'],
    proficiencyScore: 3,
  },

  // Database - In-Memory - Cache Keys
  {
    id: 'cache-keys',
    title: 'Cache Keys',
    category: 'database',
    markdownFile: 'cache-keys.mdx',
    related: 'in-memory',
    level: 'intermediate',
    tags: ['database', 'caching'],
    proficiencyScore: 6,
  },

  // Database - In-Memory - Caching Strategies
  {
    id: 'caching-strategies',
    title: 'Caching Strategies',
    category: 'database',
    markdownFile: 'caching-strategies.mdx',
    related: 'in-memory',
    level: 'intermediate',
    tags: ['database', 'caching'],
    proficiencyScore: 9,
  },

  // Database - NoSQL
  {
    id: 'nosql',
    title: 'NoSQL',
    category: 'database',
    markdownFile: 'nosql.mdx',
    related: 'database',
    level: 'intermediate',
    proficiencyScore: 2,
  },

  // Database - NoSQL - MongoDB
  {
    id: 'mongodb',
    title: 'MongoDB',
    category: 'database',
    markdownFile: 'mongodb.mdx',
    related: 'nosql',
    level: 'intermediate',
    tags: ['database', 'nosql'],
    proficiencyScore: 2,
  },

  // Database - NoSQL - DynamoDB
  {
    id: 'dynamodb',
    title: 'DynamoDB',
    category: 'database',
    markdownFile: 'dynamodb.mdx',
    related: 'nosql',
    level: 'intermediate',
    tags: ['database', 'nosql', 'aws'],
    proficiencyScore: 10,
  },
];

/**
 * Get a knowledge item by its ID
 *
 * @param id - The unique identifier of the knowledge
 * @returns The knowledge item if found, undefined otherwise
 */
export function getKnowledgeById(id: string): Knowledge | undefined {
  return KNOWLEDGE_DATA.find((knowledge) => knowledge.id === id);
}

/**
 * Get the related knowledge item for a given knowledge ID
 *
 * @param id - The unique identifier of the knowledge
 * @returns The related knowledge item if found, undefined otherwise
 */
export function getRelatedKnowledge(id: string): Knowledge | undefined {
  const knowledge = getKnowledgeById(id);
  if (!knowledge || !knowledge.related) return undefined;

  return getKnowledgeById(knowledge.related);
}

/**
 * Get all related knowledge items for a given knowledge ID (legacy function)
 * @deprecated Use getRelatedKnowledge instead. Returns array with single item or empty array.
 */
export function getRelatedKnowledges(id: string): Knowledge[] {
  const related = getRelatedKnowledge(id);
  return related ? [related] : [];
}

/**
 * Get all knowledge items filtered by category
 *
 * @param category - The category to filter by
 * @returns Array of knowledge items in the specified category
 */
export function getKnowledgesByCategory(
  category: Knowledge['category']
): Knowledge[] {
  return KNOWLEDGE_DATA.filter((knowledge) => knowledge.category === category);
}

/**
 * Get all knowledge items filtered by tag
 *
 * @param tag - The tag to filter by
 * @returns Array of knowledge items with the specified tag
 */
export function getKnowledgesByTag(tag: string): Knowledge[] {
  return KNOWLEDGE_DATA.filter(
    (knowledge) => knowledge.tags && knowledge.tags.includes(tag)
  );
}

/**
 * Get all unique categories from all knowledge items
 *
 * @returns Array of unique category values
 */
export function getAllCategories(): Knowledge['category'][] {
  return Array.from(
    new Set(KNOWLEDGE_DATA.map((knowledge) => knowledge.category))
  ) as Knowledge['category'][];
}

// Export alias for backward compatibility
export const knowledges = KNOWLEDGE_DATA;

// Legacy exports for backward compatibility during migration
export const knowledgeNodes = KNOWLEDGE_DATA;
export const getNodeById = getKnowledgeById;
export const getRelatedNodes = getRelatedKnowledges;
export const getNodesByCategory = getKnowledgesByCategory;
export const getNodesByTag = getKnowledgesByTag;
