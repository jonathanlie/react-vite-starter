import { Knowledge } from '@/types/knowledge';

export const KNOWLEDGE_DATA: Knowledge[] = [
  // Frontend
  {
    id: 'frontend',
    title: 'Frontend',
    category: 'root',
    content:
      'My 6+ years of experience building scalable, performant, and maintainable user interfaces for complex web applications.',
    markdownFile: 'frontend.mdx',
    level: 'advanced',
  },

  // Frontend - Frameworks / Libraries
  {
    id: 'frameworks-libraries',
    title: 'Frameworks / Libraries',
    category: 'frontend',
    content:
      'Frontend frameworks and libraries for building modern web applications.',
    markdownFile: 'frameworks-libraries.mdx',
    related: 'frontend',
    level: 'intermediate',
  },

  // Frontend - Frameworks / Libraries - Angular
  {
    id: 'angular',
    title: 'Angular',
    category: 'frontend',
    content:
      'My framework of choice for large-scale applications. I led the greenfield architecture of a new rewards platform, setting up test patterns and core logic.',
    markdownFile: 'angular.mdx',
    related: 'frameworks-libraries',
    level: 'advanced',
    tags: ['frontend', 'framework'],
  },

  // Frontend - Frameworks / Libraries - AngularJS
  {
    id: 'angularjs',
    title: 'AngularJS',
    category: 'frontend',
    content:
      'My work maintaining and improving a large AngularJS monolith by refactoring monolithic controllers into a modern, component-based architecture.',
    markdownFile: 'angularjs.mdx',
    related: 'frameworks-libraries',
    level: 'intermediate',
    tags: ['frontend', 'framework', 'legacy'],
  },

  // Frontend - Frameworks / Libraries - React
  {
    id: 'react',
    title: 'React',
    category: 'frontend',
    content:
      'My experience at VersaFleet building the web dashboard (React) and the driver mobile app (React Native).',
    markdownFile: 'react.mdx',
    related: 'frameworks-libraries',
    level: 'intermediate',
    tags: ['frontend', 'framework', 'mobile'],
  },

  // Frontend - Frameworks / Libraries - React Native
  {
    id: 'react-native',
    title: 'React Native',
    category: 'frontend',
    content: 'Building cross-platform mobile applications using React Native.',
    markdownFile: 'react-native.mdx',
    related: 'frameworks-libraries',
    level: 'intermediate',
    tags: ['frontend', 'framework', 'mobile'],
  },

  // Frontend - Frameworks / Libraries - VueJS
  {
    id: 'vuejs',
    title: 'VueJS',
    category: 'frontend',
    content: 'Experience building applications with Vue.js framework.',
    markdownFile: 'vuejs.mdx',
    related: 'frameworks-libraries',
    level: 'intermediate',
    tags: ['frontend', 'framework'],
  },

  // Frontend - State Management
  {
    id: 'state-management',
    title: 'State Management',
    category: 'frontend',
    content:
      'Managing application state using various state management solutions.',
    markdownFile: 'state-management.mdx',
    related: 'frontend',
    level: 'intermediate',
  },

  // Frontend - State Management - Reflux
  {
    id: 'reflux',
    title: 'Reflux',
    category: 'frontend',
    content:
      'My experience with Reflux, including a critical migration from Reflux to Redux, refactoring stores to reducers.',
    markdownFile: 'reflux.mdx',
    related: 'state-management',
    level: 'intermediate',
    tags: ['frontend', 'state-management'],
  },

  // Frontend - State Management - NgRx
  {
    id: 'ngrx',
    title: 'NgRx',
    category: 'frontend',
    content: 'Using NgRx for state management in Angular applications.',
    markdownFile: 'ngrx.mdx',
    related: 'state-management',
    level: 'intermediate',
    tags: ['frontend', 'state-management', 'angular'],
  },

  // Frontend - State Management - Redux
  {
    id: 'redux',
    title: 'Redux',
    category: 'frontend',
    content:
      'My experience with predictable state containers, including a critical migration from Reflux to Redux, refactoring stores to reducers.',
    markdownFile: 'redux.mdx',
    related: 'state-management',
    level: 'intermediate',
    tags: ['frontend', 'state-management'],
  },

  // Frontend - State Management - Zustand
  {
    id: 'zustand',
    title: 'Zustand',
    category: 'frontend',
    content:
      'Using Zustand for lightweight state management in React applications.',
    markdownFile: 'zustand.mdx',
    related: 'state-management',
    level: 'intermediate',
    tags: ['frontend', 'state-management', 'react'],
  },

  // Frontend - Typescript
  {
    id: 'typescript',
    title: 'Typescript',
    category: 'frontend',
    content: 'Using TypeScript for type-safe JavaScript development.',
    markdownFile: 'typescript.mdx',
    related: 'frontend',
    level: 'intermediate',
  },

  // Frontend - Typescript - Generics
  {
    id: 'typescript-generics',
    title: 'Generics',
    category: 'frontend',
    content: 'Using TypeScript generics for reusable and type-safe code.',
    markdownFile: 'typescript-generics.mdx',
    related: 'typescript',
    level: 'intermediate',
    tags: ['frontend', 'typescript'],
  },

  // Frontend - Typescript - Utility Types
  {
    id: 'typescript-utility-types',
    title: 'Utility Types',
    category: 'frontend',
    content: 'Leveraging TypeScript utility types for type transformations.',
    markdownFile: 'typescript-utility-types.mdx',
    related: 'typescript',
    level: 'intermediate',
    tags: ['frontend', 'typescript'],
  },

  // Frontend - Typescript - Type Guards
  {
    id: 'typescript-type-guards',
    title: 'Type Guards',
    category: 'frontend',
    content: 'Using TypeScript type guards for runtime type checking.',
    markdownFile: 'typescript-type-guards.mdx',
    related: 'typescript',
    level: 'intermediate',
    tags: ['frontend', 'typescript'],
  },

  // Frontend - Styling
  {
    id: 'styling',
    title: 'Styling',
    category: 'frontend',
    content: 'Various approaches to styling modern web applications.',
    markdownFile: 'styling.mdx',
    related: 'frontend',
    level: 'intermediate',
  },

  // Frontend - Styling - Tailwind CSS
  {
    id: 'tailwind-css',
    title: 'Tailwind CSS',
    category: 'frontend',
    content: 'Using Tailwind CSS for utility-first styling.',
    markdownFile: 'tailwind-css.mdx',
    related: 'styling',
    level: 'intermediate',
    tags: ['frontend', 'styling', 'css'],
  },

  // Frontend - Styling - CSS-in-JS
  {
    id: 'css-in-js',
    title: 'CSS-in-JS',
    category: 'frontend',
    content: 'Using CSS-in-JS solutions for component-scoped styling.',
    markdownFile: 'css-in-js.mdx',
    related: 'styling',
    level: 'intermediate',
    tags: ['frontend', 'styling'],
  },

  // Frontend - Styling - CSS Preprocessors
  {
    id: 'css-preprocessors',
    title: 'CSS Preprocessors',
    category: 'frontend',
    content: 'Using CSS preprocessors like Sass, Less, or Stylus.',
    markdownFile: 'css-preprocessors.mdx',
    related: 'styling',
    level: 'intermediate',
    tags: ['frontend', 'styling', 'css'],
  },

  // Frontend - Build Tools
  {
    id: 'build-tools',
    title: 'Build Tools',
    category: 'frontend',
    content:
      'Tools for building, bundling, and optimizing frontend applications.',
    markdownFile: 'build-tools.mdx',
    related: 'frontend',
    level: 'intermediate',
  },

  // Frontend - Build Tools - Vite
  {
    id: 'vite',
    title: 'Vite',
    category: 'frontend',
    content: 'Using Vite for fast development and optimized production builds.',
    markdownFile: 'vite.mdx',
    related: 'build-tools',
    level: 'intermediate',
    tags: ['frontend', 'build-tools'],
  },

  // Frontend - Build Tools - Webpack
  {
    id: 'webpack',
    title: 'Webpack',
    category: 'frontend',
    content: 'Using Webpack for module bundling and asset management.',
    markdownFile: 'webpack.mdx',
    related: 'build-tools',
    level: 'intermediate',
    tags: ['frontend', 'build-tools'],
  },

  // Frontend - Build Tools - Babel
  {
    id: 'babel',
    title: 'Babel',
    category: 'frontend',
    content: 'Using Babel for JavaScript transpilation and polyfills.',
    markdownFile: 'babel.mdx',
    related: 'build-tools',
    level: 'intermediate',
    tags: ['frontend', 'build-tools'],
  },

  // Frontend - Internationalization - i18n
  {
    id: 'internationalization-i18n',
    title: 'Internationalization - i18n',
    category: 'frontend',
    content:
      'Building a robust translation pipeline with PhraseApp, including the complex implementation of Right-to-Left (RTL) layout support.',
    markdownFile: 'internationalization-i18n.mdx',
    related: 'frontend',
    level: 'advanced',
    tags: ['frontend', 'i18n', 'accessibility'],
  },

  // Frontend - Internationalization - i18n - RTL (Right-to-Left)
  {
    id: 'rtl-right-to-left',
    title: 'RTL (Right-to-Left)',
    category: 'frontend',
    content:
      'Implementing Right-to-Left layout support for international applications.',
    markdownFile: 'rtl-right-to-left.mdx',
    related: 'internationalization-i18n',
    level: 'advanced',
    tags: ['frontend', 'i18n', 'rtl', 'accessibility'],
  },

  // Frontend - Accessibility - a11y
  {
    id: 'accessibility-a11y',
    title: 'Accessibility - a11y',
    category: 'frontend',
    content: 'Building accessible web applications that work for all users.',
    markdownFile: 'accessibility-a11y.mdx',
    related: 'frontend',
    level: 'intermediate',
  },

  // Frontend - Accessibility - a11y - aria attributes
  {
    id: 'aria-attributes',
    title: 'aria attributes',
    category: 'frontend',
    content:
      'Using ARIA attributes to enhance accessibility for assistive technologies.',
    markdownFile: 'aria-attributes.mdx',
    related: 'accessibility-a11y',
    level: 'intermediate',
    tags: ['frontend', 'accessibility', 'a11y'],
  },

  // Frontend - Accessibility - a11y - keyboard navigation
  {
    id: 'keyboard-navigation',
    title: 'keyboard navigation',
    category: 'frontend',
    content: 'Implementing keyboard navigation for accessible user interfaces.',
    markdownFile: 'keyboard-navigation.mdx',
    related: 'accessibility-a11y',
    level: 'intermediate',
    tags: ['frontend', 'accessibility', 'a11y'],
  },

  // Frontend - Accessibility - a11y - voiceover
  {
    id: 'voiceover',
    title: 'voiceover',
    category: 'frontend',
    content: 'Testing and optimizing applications for VoiceOver screen reader.',
    markdownFile: 'voiceover.mdx',
    related: 'accessibility-a11y',
    level: 'intermediate',
    tags: ['frontend', 'accessibility', 'a11y'],
  },

  // Frontend - Accessibility - a11y - semantic HTML
  {
    id: 'semantic-html',
    title: 'semantic HTML',
    category: 'frontend',
    content: 'Using semantic HTML elements for better accessibility and SEO.',
    markdownFile: 'semantic-html.mdx',
    related: 'accessibility-a11y',
    level: 'intermediate',
    tags: ['frontend', 'accessibility', 'a11y', 'html'],
  },

  // Frontend - Frontend Testing
  {
    id: 'frontend-testing',
    title: 'Frontend Testing',
    category: 'frontend',
    content: 'Testing strategies and tools for frontend applications.',
    markdownFile: 'frontend-testing.mdx',
    related: 'frontend',
    level: 'intermediate',
  },

  // Frontend - Frontend Testing - Jest
  {
    id: 'jest',
    title: 'Jest',
    category: 'frontend',
    content:
      'Using Jest for unit and integration testing in JavaScript applications.',
    markdownFile: 'jest.mdx',
    related: 'frontend-testing',
    level: 'intermediate',
    tags: ['frontend', 'testing'],
  },

  // Frontend - Frontend Testing - Jasmine
  {
    id: 'jasmine',
    title: 'Jasmine',
    category: 'frontend',
    content:
      'Using Jasmine for behavior-driven testing in JavaScript applications.',
    markdownFile: 'jasmine.mdx',
    related: 'frontend-testing',
    level: 'intermediate',
    tags: ['frontend', 'testing'],
  },

  // Frontend - Frontend Testing - Playwright
  {
    id: 'playwright',
    title: 'Playwright',
    category: 'frontend',
    content:
      'Using Playwright for end-to-end testing across multiple browsers.',
    markdownFile: 'playwright.mdx',
    related: 'frontend-testing',
    level: 'intermediate',
    tags: ['frontend', 'testing', 'e2e'],
  },

  // Frontend - Web Performance
  {
    id: 'web-performance',
    title: 'Web Performance',
    category: 'frontend',
    content:
      'My optimization strategies, including lazy-loading common components per-page and, more critically, lazy-loading whitelabel-specific components.',
    markdownFile: 'web-performance.mdx',
    related: 'frontend',
    level: 'advanced',
    tags: ['frontend', 'optimization', 'performance'],
  },

  // Frontend - Web Performance - Code splitting
  {
    id: 'code-splitting',
    title: 'Code splitting',
    category: 'frontend',
    content:
      'Implementing code splitting strategies for optimized bundle sizes.',
    markdownFile: 'code-splitting.mdx',
    related: 'web-performance',
    level: 'advanced',
    tags: ['frontend', 'optimization', 'performance'],
  },

  // Frontend - Web Performance - Lazy loading
  {
    id: 'lazy-loading',
    title: 'Lazy loading',
    category: 'frontend',
    content: 'Implementing lazy loading for components, images, and routes.',
    markdownFile: 'lazy-loading.mdx',
    related: 'web-performance',
    level: 'advanced',
    tags: ['frontend', 'optimization', 'performance'],
  },

  // Backend
  {
    id: 'backend',
    title: 'Backend',
    category: 'root',
    content:
      'My work in backend, focusing on reliability, multi-tenant architecture, and microservice communication.',
    markdownFile: 'backend.mdx',
    level: 'intermediate',
  },

  // Backend - Languages / Runtimes
  {
    id: 'languages-runtimes',
    title: 'Languages / Runtimes',
    category: 'backend',
    content: 'Programming languages and runtimes used for backend development.',
    markdownFile: 'languages-runtimes.mdx',
    related: 'backend',
    level: 'intermediate',
  },

  // Backend - Languages / Runtimes - Ruby
  {
    id: 'ruby',
    title: 'Ruby',
    category: 'backend',
    content: 'Using Ruby for backend development and scripting.',
    markdownFile: 'ruby.mdx',
    related: 'languages-runtimes',
    level: 'intermediate',
    tags: ['backend', 'language'],
  },

  // Backend - Languages / Runtimes - Python
  {
    id: 'python',
    title: 'Python',
    category: 'backend',
    content: 'Using Python for backend development and automation.',
    markdownFile: 'python.mdx',
    related: 'languages-runtimes',
    level: 'intermediate',
    tags: ['backend', 'language'],
  },

  // Backend - Frameworks / Libraries (Ruby)
  {
    id: 'frameworks-libraries-ruby',
    title: 'Frameworks / Libraries (Ruby)',
    category: 'backend',
    content: 'Ruby frameworks and libraries for backend development.',
    markdownFile: 'frameworks-libraries-ruby.mdx',
    related: 'backend',
    level: 'intermediate',
  },

  // Backend - Frameworks / Libraries (Ruby) - Ruby on Rails
  {
    id: 'ruby-on-rails',
    title: 'Ruby on Rails',
    category: 'backend',
    content:
      'My primary framework for backend development. Used to build orchestration APIs, manage background jobs, and implement multi-tenant logic.',
    markdownFile: 'ruby-on-rails.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'framework', 'ruby'],
  },

  // Backend - Frameworks / Libraries (Ruby) - Sidekiq
  {
    id: 'sidekiq',
    title: 'Sidekiq',
    category: 'backend',
    content:
      'Using Sidekiq for background job processing in Ruby applications.',
    markdownFile: 'sidekiq.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'ruby', 'background-jobs'],
  },

  // Backend - Frameworks / Libraries (Ruby) - ActionCable
  {
    id: 'actioncable',
    title: 'ActionCable',
    category: 'backend',
    content:
      'Using ActionCable for WebSocket connections in Rails applications.',
    markdownFile: 'actioncable.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'ruby', 'rails', 'websocket'],
  },

  // Backend - Frameworks / Libraries (Ruby) - Dry::Validation
  {
    id: 'dry-validation',
    title: 'Dry::Validation',
    category: 'backend',
    content:
      'Using Dry::Validation for schema validation in Ruby applications.',
    markdownFile: 'dry-validation.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'ruby', 'validation'],
  },

  // Backend - Frameworks / Libraries (Ruby) - MJML - Liquid
  {
    id: 'mjml-liquid',
    title: 'MJML - Liquid',
    category: 'backend',
    content: 'Using MJML and Liquid for email template development.',
    markdownFile: 'mjml-liquid.mdx',
    related: 'frameworks-libraries-ruby',
    level: 'intermediate',
    tags: ['backend', 'email', 'templates'],
  },

  // Backend - Messaging / Event Streaming
  {
    id: 'messaging-event-streaming',
    title: 'Messaging / Event Streaming',
    category: 'backend',
    content:
      'Messaging and event streaming solutions for asynchronous communication.',
    markdownFile: 'messaging-event-streaming.mdx',
    related: 'backend',
    level: 'intermediate',
  },

  // Backend - Messaging / Event Streaming - Kafka
  {
    id: 'kafka',
    title: 'Kafka',
    category: 'backend',
    content:
      'Using Kafka as a message queue for reliable, asynchronous communication.',
    markdownFile: 'kafka.mdx',
    related: 'messaging-event-streaming',
    level: 'intermediate',
    tags: ['backend', 'messaging', 'event-streaming'],
  },

  // Backend - Authentication / Authorization
  {
    id: 'authentication-authorization',
    title: 'Authentication / Authorization',
    category: 'backend',
    content: 'Implementing authentication and authorization mechanisms.',
    markdownFile: 'authentication-authorization.mdx',
    related: 'backend',
    level: 'intermediate',
  },

  // Backend - Authentication / Authorization - OAuth2
  {
    id: 'oauth2',
    title: 'OAuth2',
    category: 'backend',
    content: 'Implementing OAuth2 for secure authentication and authorization.',
    markdownFile: 'oauth2.mdx',
    related: 'authentication-authorization',
    level: 'intermediate',
    tags: ['backend', 'authentication', 'authorization'],
  },

  // Backend - Authentication / Authorization - JWT
  {
    id: 'jwt',
    title: 'JWT',
    category: 'backend',
    content: 'Using JSON Web Tokens for stateless authentication.',
    markdownFile: 'jwt.mdx',
    related: 'authentication-authorization',
    level: 'intermediate',
    tags: ['backend', 'authentication'],
  },

  // Backend - Authentication / Authorization - Single Sign-On
  {
    id: 'single-sign-on',
    title: 'Single Sign-On',
    category: 'backend',
    content:
      'Implementing Single Sign-On (SSO) solutions for unified authentication.',
    markdownFile: 'single-sign-on.mdx',
    related: 'authentication-authorization',
    level: 'intermediate',
    tags: ['backend', 'authentication', 'sso'],
  },

  // Backend - API Design
  {
    id: 'api-design',
    title: 'API Design',
    category: 'backend',
    content:
      'Designing and documenting partner-facing APIs (OpenAPI) and internal APIs. Also includes backend-driven validation using JSON Schema.',
    markdownFile: 'api-design.mdx',
    related: 'backend',
    level: 'intermediate',
    tags: ['backend', 'api', 'openapi'],
  },

  // Backend - API Design - REST
  {
    id: 'rest',
    title: 'REST',
    category: 'backend',
    content: 'Designing RESTful APIs following REST principles.',
    markdownFile: 'rest.mdx',
    related: 'api-design',
    level: 'intermediate',
    tags: ['backend', 'api'],
  },

  // Backend - API Design - GraphQL
  {
    id: 'graphql',
    title: 'GraphQL',
    category: 'backend',
    content: 'Designing and implementing GraphQL APIs.',
    markdownFile: 'graphql.mdx',
    related: 'api-design',
    level: 'intermediate',
    tags: ['backend', 'api'],
  },

  // Backend - API Design - gRPC
  {
    id: 'grpc',
    title: 'gRPC',
    category: 'backend',
    content:
      'Designing and implementing gRPC services for high-performance APIs.',
    markdownFile: 'grpc.mdx',
    related: 'api-design',
    level: 'intermediate',
    tags: ['backend', 'api'],
  },

  // Backend - Backend Testing
  {
    id: 'backend-testing',
    title: 'Backend Testing',
    category: 'backend',
    content: 'Testing strategies and tools for backend applications.',
    markdownFile: 'backend-testing.mdx',
    related: 'backend',
    level: 'intermediate',
  },

  // Backend - Backend Testing - RSpec
  {
    id: 'rspec',
    title: 'RSpec',
    category: 'backend',
    content: 'Using RSpec for behavior-driven testing in Ruby applications.',
    markdownFile: 'rspec.mdx',
    related: 'backend-testing',
    level: 'intermediate',
    tags: ['backend', 'testing', 'ruby'],
  },

  // Backend - Backend Testing - Postman
  {
    id: 'postman',
    title: 'Postman',
    category: 'backend',
    content: 'Using Postman for API testing and documentation.',
    markdownFile: 'postman.mdx',
    related: 'backend-testing',
    level: 'intermediate',
    tags: ['backend', 'testing', 'api'],
  },

  // Backend - Backend Testing - FactoryBot
  {
    id: 'factorybot',
    title: 'FactoryBot',
    category: 'backend',
    content: 'Using FactoryBot for test data generation in Ruby applications.',
    markdownFile: 'factorybot.mdx',
    related: 'backend-testing',
    level: 'intermediate',
    tags: ['backend', 'testing', 'ruby'],
  },

  // Backend - Backend Testing - Gatling
  {
    id: 'gatling',
    title: 'Gatling',
    category: 'backend',
    content: 'Using Gatling for load testing and performance testing.',
    markdownFile: 'gatling.mdx',
    related: 'backend-testing',
    level: 'intermediate',
    tags: ['backend', 'testing', 'performance'],
  },

  // Devops
  {
    id: 'devops',
    title: 'DevOps',
    category: 'root',
    content:
      'My experience with the operational side, from setting up initial build pipelines (Grunt) to participating in on-call rotations.',
    markdownFile: 'devops.mdx',
    level: 'intermediate',
  },

  // Devops - Infrastructure as Code (IaC)
  {
    id: 'infrastructure-as-code-iac',
    title: 'Infrastructure as Code (IaC)',
    category: 'devops',
    content:
      'Managing infrastructure through code for version control and automation.',
    markdownFile: 'infrastructure-as-code-iac.mdx',
    related: 'devops',
    level: 'intermediate',
  },

  // Devops - Infrastructure as Code (IaC) - Terraform
  {
    id: 'terraform',
    title: 'Terraform',
    category: 'devops',
    content: 'Using Terraform for infrastructure provisioning and management.',
    markdownFile: 'terraform.mdx',
    related: 'infrastructure-as-code-iac',
    level: 'intermediate',
    tags: ['devops', 'iac'],
  },

  // Devops - Containerization & Orchestration
  {
    id: 'containerization-orchestration',
    title: 'Containerization & Orchestration',
    category: 'devops',
    content:
      'Containerization and orchestration solutions for application deployment.',
    markdownFile: 'containerization-orchestration.mdx',
    related: 'devops',
    level: 'intermediate',
  },

  // Devops - Containerization & Orchestration - Docker
  {
    id: 'docker',
    title: 'Docker',
    category: 'devops',
    content: 'Using Docker for containerization and application packaging.',
    markdownFile: 'docker.mdx',
    related: 'containerization-orchestration',
    level: 'intermediate',
    tags: ['devops', 'containerization'],
  },

  // Devops - Containerization & Orchestration - Docker - Docker Compose
  {
    id: 'docker-compose',
    title: 'Docker Compose',
    category: 'devops',
    content: 'Using Docker Compose for multi-container Docker applications.',
    markdownFile: 'docker-compose.mdx',
    related: 'docker',
    level: 'intermediate',
    tags: ['devops', 'containerization', 'docker'],
  },

  // Devops - Containerization & Orchestration - Kubernetes (k8s)
  {
    id: 'kubernetes-k8s',
    title: 'Kubernetes (k8s)',
    category: 'devops',
    content: 'Using Kubernetes for container orchestration and management.',
    markdownFile: 'kubernetes-k8s.mdx',
    related: 'containerization-orchestration',
    level: 'intermediate',
    tags: ['devops', 'orchestration'],
  },

  // Devops - Cloud
  {
    id: 'cloud',
    title: 'Cloud',
    category: 'devops',
    content: 'Cloud computing platforms and services.',
    markdownFile: 'cloud.mdx',
    related: 'devops',
    level: 'intermediate',
  },

  // Devops - Cloud - AWS
  {
    id: 'aws',
    title: 'AWS',
    category: 'devops',
    content: 'Using Amazon Web Services for cloud infrastructure and services.',
    markdownFile: 'aws.mdx',
    related: 'cloud',
    level: 'intermediate',
    tags: ['devops', 'cloud'],
  },

  // Devops - Cloud - AWS - EC2
  {
    id: 'ec2',
    title: 'EC2',
    category: 'devops',
    content: 'Using Amazon EC2 for virtual server hosting.',
    markdownFile: 'ec2.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws'],
  },

  // Devops - Cloud - AWS - S3
  {
    id: 's3',
    title: 'S3',
    category: 'devops',
    content: 'Using Amazon S3 for object storage and file hosting.',
    markdownFile: 's3.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws'],
  },

  // Devops - Cloud - AWS - RDS
  {
    id: 'rds',
    title: 'RDS',
    category: 'devops',
    content: 'Using Amazon RDS for managed relational database services.',
    markdownFile: 'rds.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws', 'database'],
  },

  // Devops - Cloud - AWS - IAM
  {
    id: 'iam',
    title: 'IAM',
    category: 'devops',
    content: 'Using AWS IAM for identity and access management.',
    markdownFile: 'iam.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws', 'security'],
  },

  // Devops - Cloud - AWS - VPC
  {
    id: 'vpc',
    title: 'VPC',
    category: 'devops',
    content: 'Using Amazon VPC for virtual private cloud networking.',
    markdownFile: 'vpc.mdx',
    related: 'aws',
    level: 'intermediate',
    tags: ['devops', 'cloud', 'aws', 'networking'],
  },

  // Devops - CI/CD
  {
    id: 'ci-cd',
    title: 'CI/CD',
    category: 'devops',
    content: 'Continuous Integration and Continuous Deployment pipelines.',
    markdownFile: 'ci-cd.mdx',
    related: 'devops',
    level: 'intermediate',
  },

  // Devops - CI/CD - Github Actions
  {
    id: 'github-actions',
    title: 'Github Actions',
    category: 'devops',
    content: 'Using GitHub Actions for CI/CD pipelines.',
    markdownFile: 'github-actions.mdx',
    related: 'ci-cd',
    level: 'intermediate',
    tags: ['devops', 'ci-cd'],
  },

  // Devops - CI/CD - Jenkins
  {
    id: 'jenkins',
    title: 'Jenkins',
    category: 'devops',
    content: 'Using Jenkins for continuous integration and deployment.',
    markdownFile: 'jenkins.mdx',
    related: 'ci-cd',
    level: 'intermediate',
    tags: ['devops', 'ci-cd'],
  },

  // Devops - CI/CD - CircleCI
  {
    id: 'circleci',
    title: 'CircleCI',
    category: 'devops',
    content: 'Using CircleCI for continuous integration and deployment.',
    markdownFile: 'circleci.mdx',
    related: 'ci-cd',
    level: 'intermediate',
    tags: ['devops', 'ci-cd'],
  },

  // Tooling
  {
    id: 'tooling',
    title: 'Tooling',
    category: 'root',
    content:
      'The essential tools I use for observability, monitoring, and internationalization that support the development lifecycle.',
    markdownFile: 'tooling.mdx',
    level: 'intermediate',
  },

  // Tooling - Version Control
  {
    id: 'version-control',
    title: 'Version Control',
    category: 'tooling',
    content: 'Version control systems for managing code changes.',
    markdownFile: 'version-control.mdx',
    related: 'tooling',
    level: 'intermediate',
  },

  // Tooling - Version Control - Git
  {
    id: 'git',
    title: 'Git',
    category: 'tooling',
    content: 'Using Git for distributed version control.',
    markdownFile: 'git.mdx',
    related: 'version-control',
    level: 'intermediate',
    tags: ['tooling', 'version-control'],
  },

  // Tooling - Observability
  {
    id: 'observability',
    title: 'Observability',
    category: 'tooling',
    content:
      'Using tools like Grafana, Appsignal, and Rollbar to monitor application health, trace errors, and debug incidents.',
    markdownFile: 'observability.mdx',
    related: 'tooling',
    level: 'intermediate',
    tags: ['tooling', 'monitoring'],
  },

  // Tooling - Observability - Grafana
  {
    id: 'grafana',
    title: 'Grafana',
    category: 'tooling',
    content:
      'Using Grafana for metrics visualization and monitoring dashboards.',
    markdownFile: 'grafana.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
  },

  // Tooling - Observability - Appsignal
  {
    id: 'appsignal',
    title: 'Appsignal',
    category: 'tooling',
    content:
      'Using Appsignal for application performance monitoring and error tracking.',
    markdownFile: 'appsignal.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
  },

  // Tooling - Observability - Rollbar
  {
    id: 'rollbar',
    title: 'Rollbar',
    category: 'tooling',
    content: 'Using Rollbar for error tracking and monitoring.',
    markdownFile: 'rollbar.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
  },

  // Tooling - Observability - Datadog
  {
    id: 'datadog',
    title: 'Datadog',
    category: 'tooling',
    content: 'Using Datadog for infrastructure and application monitoring.',
    markdownFile: 'datadog.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
  },

  // Tooling - Observability - Prometheus
  {
    id: 'prometheus',
    title: 'Prometheus',
    category: 'tooling',
    content: 'Using Prometheus for metrics collection and monitoring.',
    markdownFile: 'prometheus.mdx',
    related: 'observability',
    level: 'intermediate',
    tags: ['tooling', 'observability', 'monitoring'],
  },

  // Tooling - Content (Headless CMS)
  {
    id: 'content-headless-cms',
    title: 'Content (Headless CMS)',
    category: 'tooling',
    content: 'Headless CMS solutions for content management.',
    markdownFile: 'content-headless-cms.mdx',
    related: 'tooling',
    level: 'intermediate',
  },

  // Tooling - Content (Headless CMS) - PhraseApp
  {
    id: 'phraseapp',
    title: 'PhraseApp',
    category: 'tooling',
    content:
      'The translation management tool I used for i18n. I built a custom script to automate syncing translations with it.',
    markdownFile: 'phraseapp.mdx',
    related: 'content-headless-cms',
    level: 'intermediate',
    tags: ['tooling', 'i18n', 'cms'],
  },

  // Tooling - Content (Headless CMS) - Prismic
  {
    id: 'prismic',
    title: 'Prismic',
    category: 'tooling',
    content: 'Using Prismic as a headless CMS for content management.',
    markdownFile: 'prismic.mdx',
    related: 'content-headless-cms',
    level: 'intermediate',
    tags: ['tooling', 'cms'],
  },

  // Tooling - Testing (Cross-Browser)
  {
    id: 'testing-cross-browser',
    title: 'Testing (Cross-Browser)',
    category: 'tooling',
    content: 'Cross-browser testing tools and services.',
    markdownFile: 'testing-cross-browser.mdx',
    related: 'tooling',
    level: 'intermediate',
  },

  // Tooling - Testing (Cross-Browser) - Browserstack
  {
    id: 'browserstack',
    title: 'Browserstack',
    category: 'tooling',
    content: 'Using BrowserStack for cross-browser testing.',
    markdownFile: 'browserstack.mdx',
    related: 'testing-cross-browser',
    level: 'intermediate',
    tags: ['tooling', 'testing'],
  },

  // Tooling - Third-Party APIs / Services
  {
    id: 'third-party-apis-services',
    title: 'Third-Party APIs / Services',
    category: 'tooling',
    content:
      'Third-party APIs and services for extending application functionality.',
    markdownFile: 'third-party-apis-services.mdx',
    related: 'tooling',
    level: 'intermediate',
  },

  // Tooling - Third-Party APIs / Services - Geospatial
  {
    id: 'geospatial',
    title: 'Geospatial',
    category: 'tooling',
    content:
      'Integrating with Google Maps and Mapbox to visualize delivery clusters, plot route nodes, and track real-time locations.',
    markdownFile: 'geospatial.mdx',
    related: 'third-party-apis-services',
    level: 'intermediate',
    tags: ['tooling', 'api', 'maps'],
  },

  // Tooling - Third-Party APIs / Services - Geospatial - Google Maps
  {
    id: 'google-maps',
    title: 'Google Maps',
    category: 'tooling',
    content: 'Integrating Google Maps API for mapping and location services.',
    markdownFile: 'google-maps.mdx',
    related: 'geospatial',
    level: 'intermediate',
    tags: ['tooling', 'api', 'maps', 'geospatial'],
  },

  // Tooling - Third-Party APIs / Services - Geospatial - Mapbox
  {
    id: 'mapbox',
    title: 'Mapbox',
    category: 'tooling',
    content: 'Integrating Mapbox API for mapping and location services.',
    markdownFile: 'mapbox.mdx',
    related: 'geospatial',
    level: 'intermediate',
    tags: ['tooling', 'api', 'maps', 'geospatial'],
  },

  // Tooling - Third-Party APIs / Services - Payment
  {
    id: 'payment',
    title: 'Payment',
    category: 'tooling',
    content: 'Payment processing APIs and services.',
    markdownFile: 'payment.mdx',
    related: 'third-party-apis-services',
    level: 'intermediate',
  },

  // Tooling - Third-Party APIs / Services - Payment - Stripe
  {
    id: 'stripe',
    title: 'Stripe',
    category: 'tooling',
    content: 'Integrating Stripe for payment processing.',
    markdownFile: 'stripe.mdx',
    related: 'payment',
    level: 'intermediate',
    tags: ['tooling', 'api', 'payment'],
  },

  // Tooling - Third-Party APIs / Services - Communication
  {
    id: 'communication',
    title: 'Communication',
    category: 'tooling',
    content: 'Communication APIs and services for messaging and notifications.',
    markdownFile: 'communication.mdx',
    related: 'third-party-apis-services',
    level: 'intermediate',
  },

  // Tooling - Third-Party APIs / Services - Communication - Twilio
  {
    id: 'twilio',
    title: 'Twilio',
    category: 'tooling',
    content: 'Integrating Twilio for SMS, voice, and communication services.',
    markdownFile: 'twilio.mdx',
    related: 'communication',
    level: 'intermediate',
    tags: ['tooling', 'api', 'communication'],
  },

  // Tooling - Third-Party APIs / Services - Communication - Mailgun
  {
    id: 'mailgun',
    title: 'Mailgun',
    category: 'tooling',
    content: 'Integrating Mailgun for email delivery services.',
    markdownFile: 'mailgun.mdx',
    related: 'communication',
    level: 'intermediate',
    tags: ['tooling', 'api', 'communication', 'email'],
  },

  // Concepts
  {
    id: 'concepts',
    title: 'Concepts',
    category: 'root',
    content:
      "Beyond tools: these are the high-level strategies and architectural patterns I've implemented, from multi-tenancy to system reliability.",
    markdownFile: 'concepts.mdx',
    level: 'advanced',
  },

  // Concepts - General Principles
  {
    id: 'general-principles',
    title: 'General Principles',
    category: 'concept',
    content: 'Core software engineering principles and best practices.',
    markdownFile: 'general-principles.mdx',
    related: 'concepts',
    level: 'advanced',
  },

  // Concepts - General Principles - Idempotency
  {
    id: 'idempotency',
    title: 'Idempotency',
    category: 'concept',
    content: 'Designing idempotent operations for reliable system behavior.',
    markdownFile: 'idempotency.mdx',
    related: 'general-principles',
    level: 'advanced',
    tags: ['concept', 'principle'],
  },

  // Concepts - General Principles - SOLID
  {
    id: 'solid',
    title: 'SOLID',
    category: 'concept',
    content:
      'Applying SOLID principles for maintainable and scalable code design.',
    markdownFile: 'solid.mdx',
    related: 'general-principles',
    level: 'advanced',
    tags: ['concept', 'principle'],
  },

  // Concepts - General Principles - DRY
  {
    id: 'dry',
    title: 'DRY',
    category: 'concept',
    content:
      "Following DRY (Don't Repeat Yourself) principle to reduce code duplication.",
    markdownFile: 'dry.mdx',
    related: 'general-principles',
    level: 'advanced',
    tags: ['concept', 'principle'],
  },

  // Concepts - General Principles - Multitenancy
  {
    id: 'multitenancy',
    title: 'Multitenancy',
    category: 'concept',
    content:
      'The core challenge of my senior work: architecting a single application to serve ~10 different clients with unique themes, features, and builds.',
    markdownFile: 'multitenancy.mdx',
    related: 'general-principles',
    level: 'advanced',
    tags: ['concept', 'architecture', 'saas'],
  },

  // Concepts - Design Patterns
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    category: 'concept',
    content:
      'Common design patterns for solving recurring software design problems.',
    markdownFile: 'design-patterns.mdx',
    related: 'concepts',
    level: 'advanced',
  },

  // Concepts - Design Patterns - Chain of Responsibility
  {
    id: 'chain-of-responsibility',
    title: 'Chain of Responsibility',
    category: 'concept',
    content:
      'Implementing Chain of Responsibility pattern for request handling.',
    markdownFile: 'chain-of-responsibility.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
  },

  // Concepts - Design Patterns - Adapter
  {
    id: 'adapter',
    title: 'Adapter',
    category: 'concept',
    content:
      'Using Adapter pattern to make incompatible interfaces work together.',
    markdownFile: 'adapter.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
  },

  // Concepts - Design Patterns - Singleton
  {
    id: 'singleton',
    title: 'Singleton',
    category: 'concept',
    content: 'Implementing Singleton pattern for single-instance objects.',
    markdownFile: 'singleton.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
  },

  // Concepts - Design Patterns - Factory
  {
    id: 'factory',
    title: 'Factory',
    category: 'concept',
    content:
      'Using Factory pattern for object creation without specifying exact classes.',
    markdownFile: 'factory.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
  },

  // Concepts - Design Patterns - Observer
  {
    id: 'observer',
    title: 'Observer',
    category: 'concept',
    content: 'Implementing Observer pattern for event-driven architectures.',
    markdownFile: 'observer.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
  },

  // Concepts - Design Patterns - Decorators
  {
    id: 'decorators',
    title: 'Decorators',
    category: 'concept',
    content: 'Using Decorator pattern to add behavior to objects dynamically.',
    markdownFile: 'decorators.mdx',
    related: 'design-patterns',
    level: 'advanced',
    tags: ['concept', 'design-pattern'],
  },

  // Database
  {
    id: 'database',
    title: 'Database',
    category: 'root',
    content:
      'My experience with relational (PostgreSQL) and NoSQL (Redis) databases for primary storage, caching, and job queues.',
    markdownFile: 'database.mdx',
    level: 'intermediate',
  },

  // Database - Relational
  {
    id: 'relational',
    title: 'Relational',
    category: 'database',
    content: 'Relational database systems and concepts.',
    markdownFile: 'relational.mdx',
    related: 'database',
    level: 'intermediate',
  },

  // Database - Relational - PostgreSQL
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    category: 'database',
    content:
      'Used as the primary relational database for storing application data in my backend work.',
    markdownFile: 'postgresql.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational'],
  },

  // Database - Relational - Indexing
  {
    id: 'indexing',
    title: 'Indexing',
    category: 'database',
    content: 'Database indexing strategies for query optimization.',
    markdownFile: 'indexing.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational', 'optimization'],
  },

  // Database - Relational - Locking
  {
    id: 'locking',
    title: 'Locking',
    category: 'database',
    content: 'Understanding and managing database locking mechanisms.',
    markdownFile: 'locking.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational'],
  },

  // Database - Relational - Transactions (ACID)
  {
    id: 'transactions-acid',
    title: 'Transactions (ACID)',
    category: 'database',
    content: 'Understanding ACID properties and transaction management.',
    markdownFile: 'transactions-acid.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational'],
  },

  // Database - Relational - Sharding
  {
    id: 'sharding',
    title: 'Sharding',
    category: 'database',
    content: 'Database sharding strategies for horizontal scaling.',
    markdownFile: 'sharding.mdx',
    related: 'relational',
    level: 'intermediate',
    tags: ['database', 'sql', 'relational', 'scaling'],
  },

  // Database - In-Memory
  {
    id: 'in-memory',
    title: 'In-Memory',
    category: 'database',
    content: 'In-memory database systems for high-performance data access.',
    markdownFile: 'in-memory.mdx',
    related: 'database',
    level: 'intermediate',
  },

  // Database - In-Memory - Redis
  {
    id: 'redis',
    title: 'Redis',
    category: 'database',
    content:
      'Used as an in-memory data store for caching and as a queue for background jobs (Sidekiq).',
    markdownFile: 'redis.mdx',
    related: 'in-memory',
    level: 'intermediate',
    tags: ['database', 'nosql', 'caching', 'queues'],
  },

  // Database - In-Memory - Cache Keys
  {
    id: 'cache-keys',
    title: 'Cache Keys',
    category: 'database',
    content: 'Designing effective cache key strategies for optimal caching.',
    markdownFile: 'cache-keys.mdx',
    related: 'in-memory',
    level: 'intermediate',
    tags: ['database', 'caching'],
  },

  // Database - In-Memory - Caching Strategies
  {
    id: 'caching-strategies',
    title: 'Caching Strategies',
    category: 'database',
    content:
      'Implementing various caching strategies for performance optimization.',
    markdownFile: 'caching-strategies.mdx',
    related: 'in-memory',
    level: 'intermediate',
    tags: ['database', 'caching'],
  },

  // Database - NoSQL
  {
    id: 'nosql',
    title: 'NoSQL',
    category: 'database',
    content: 'NoSQL database systems for flexible data modeling.',
    markdownFile: 'nosql.mdx',
    related: 'database',
    level: 'intermediate',
  },

  // Database - NoSQL - MongoDB
  {
    id: 'mongodb',
    title: 'MongoDB',
    category: 'database',
    content: 'Using MongoDB for document-based NoSQL database storage.',
    markdownFile: 'mongodb.mdx',
    related: 'nosql',
    level: 'intermediate',
    tags: ['database', 'nosql'],
  },

  // Database - NoSQL - DynamoDB
  {
    id: 'dynamodb',
    title: 'DynamoDB',
    category: 'database',
    content: 'Using Amazon DynamoDB for managed NoSQL database services.',
    markdownFile: 'dynamodb.mdx',
    related: 'nosql',
    level: 'intermediate',
    tags: ['database', 'nosql', 'aws'],
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
