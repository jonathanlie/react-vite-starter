import { Knowledge } from '@/types/knowledge';

export const KNOWLEDGE_DATA: Knowledge[] = [
  // Frontend
  {
    id: 'frontend',
    title: 'Frontend',
    isRoot: true,
    markdownFile: 'frontend.mdx',
    proficiencyScore: 7,
    content:
      '6 years of experience with various products and frontend libraries. Production experience with React, React Native, AngularJS, Angular. Architected greenfield projects and scaled to multiple tenant builds.',
  },

  // Frontend - Frameworks / Libraries
  {
    id: 'frameworks-libraries',
    title: 'Frameworks / Libraries',
    isRoot: false,
    markdownFile: 'frameworks-libraries.mdx',
    related: 'frontend',
    proficiencyScore: 9,
    content:
      'Confident in picking up new frameworks and libraries. Versatile and adaptable to different stacks.',
  },

  // Frontend - Frameworks / Libraries - Angular
  {
    id: 'angular',
    title: 'Angular',
    isRoot: false,
    markdownFile: 'angular.mdx',
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework'],
    proficiencyScore: 8,
    content:
      'Architected the core Rewards Dashboard from greenfield, scaling the platform to serve over 1 million multi-tenant users.',
  },

  // Frontend - Frameworks / Libraries - AngularJS
  {
    id: 'angularjs',
    title: 'AngularJS',
    isRoot: false,
    markdownFile: 'angularjs.mdx',
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework', 'legacy'],
    proficiencyScore: 5,
    content:
      'Maintained and refactored monolithic controllers into smaller components, preparing legacy systems for eventual migration.',
  },

  // Frontend - Frameworks / Libraries - React
  {
    id: 'react',
    title: 'React',
    isRoot: false,
    markdownFile: 'react.mdx',
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework', 'mobile'],
    proficiencyScore: 6,
    content:
      'Core contributor to the VersaFleet logistics dashboard. Built complex forms and geospatial mapping.',
  },

  // Frontend - Frameworks / Libraries - React Native
  {
    id: 'react-native',
    title: 'React Native',
    isRoot: false,
    markdownFile: 'react-native.mdx',
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework', 'mobile'],
    proficiencyScore: 5,
    content:
      'Core contributor to the Driver Mobile App. Implemented state management logic and  digital E-Signature.',
  },

  // Frontend - Frameworks / Libraries - VueJS
  {
    id: 'vuejs',
    title: 'VueJS',
    isRoot: false,
    markdownFile: 'vuejs.mdx',
    related: 'frameworks-libraries',
    tags: ['frontend', 'framework'],
    proficiencyScore: 2,
    content:
      'Conceptual familiarity with the framework. Fixed bugs on a small standalone redemption page in Ascenda.',
  },

  // Frontend - State Management
  {
    id: 'state-management',
    title: 'State Management',
    isRoot: false,
    markdownFile: 'state-management.mdx',
    related: 'frontend',
    proficiencyScore: 7,
    content:
      'Experienced with various state management solutions. Migrated from Reflux to Redux at VersaFleet. Used NgRx for Rewards Dashboard in Ascenda.',
  },

  // Frontend - State Management - Reflux
  {
    id: 'reflux',
    title: 'Reflux',
    isRoot: false,
    markdownFile: 'reflux.mdx',
    related: 'state-management',
    tags: ['frontend', 'state-management'],
    proficiencyScore: 3,
    content:
      'Maintained legacy state management stores before successfully planning and executing the strategic migration to Redux.',
  },

  // Frontend - State Management - NgRx
  {
    id: 'ngrx',
    title: 'NgRx',
    isRoot: false,
    markdownFile: 'ngrx.mdx',
    related: 'state-management',
    tags: ['frontend', 'state-management', 'angular'],
    proficiencyScore: 7,
    content:
      'Consumed and utilized advanced state management patterns such as side effects and reducers within Angular architecture.',
  },

  // Frontend - State Management - Redux
  {
    id: 'redux',
    title: 'Redux',
    isRoot: false,
    markdownFile: 'redux.mdx',
    related: 'state-management',
    tags: ['frontend', 'state-management'],
    proficiencyScore: 6,
    content:
      'Established the store patterns at VersaFleet after finishing the strategic migration from Reflux.',
  },

  // Frontend - State Management - Zustand
  {
    id: 'zustand',
    title: 'Zustand',
    isRoot: false,
    markdownFile: 'zustand.mdx',
    related: 'state-management',
    tags: ['frontend', 'state-management', 'react'],
    proficiencyScore: 2,
    content: 'Experimented with its minimalist API for personal projects.',
  },

  // Frontend - Typescript
  {
    id: 'typescript',
    title: 'Typescript',
    isRoot: false,
    markdownFile: 'typescript.mdx',
    related: 'frontend',
    proficiencyScore: 6,
    content:
      'Enforced strict, scalable type definitions across a large Angular application (Rewards Dashboard) in Ascenda.',
  },

  // Frontend - Typescript - Generics
  {
    id: 'typescript-generics',
    title: 'Generics',
    isRoot: false,
    markdownFile: 'typescript-generics.mdx',
    related: 'typescript',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 4,
    content: 'Used generics in Angular, prominently in NgRx effects.',
  },

  // Frontend - Typescript - Utility Types
  {
    id: 'typescript-utility-types',
    title: 'Utility Types',
    isRoot: false,
    markdownFile: 'typescript-utility-types.mdx',
    related: 'typescript',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 5,
    content:
      'Used Partials the most, particularly in NgRx stores and presentational components.',
  },

  // Frontend - Typescript - Type Guards
  {
    id: 'typescript-type-guards',
    title: 'Type Guards',
    isRoot: false,
    markdownFile: 'typescript-type-guards.mdx',
    related: 'typescript',
    tags: ['frontend', 'typescript'],
    proficiencyScore: 6,
    content:
      'Used in whitelabelling logic to dynamically render components. Also used a lot in utility functions to make validations stricter.',
  },

  // Frontend - Styling
  {
    id: 'styling',
    title: 'Styling',
    isRoot: false,
    markdownFile: 'styling.mdx',
    related: 'frontend',
    proficiencyScore: 6,
    content:
      'Used various concepts, ranging from vanilla CSS with naming conventions like BEM, to CSS pre-processors (SASS), to built-in framework mechanisms (e.g. Angular ViewEncapsulation). Currently learning Tailwind. ',
  },

  // Frontend - Styling - Tailwind CSS
  {
    id: 'tailwind-css',
    title: 'Tailwind CSS',
    isRoot: false,
    markdownFile: 'tailwind-css.mdx',
    related: 'styling',
    tags: ['frontend', 'styling', 'css'],
    proficiencyScore: 3,
    content:
      'Used in this portfolio site, and finding it pleasant to use. Looks to be a scalable solution provided some enforcements in place.',
  },

  // Frontend - Styling - CSS-in-JS
  {
    id: 'css-in-js',
    title: 'CSS-in-JS',
    isRoot: false,
    markdownFile: 'css-in-js.mdx',
    related: 'styling',
    tags: ['frontend', 'styling'],
    proficiencyScore: 3,
    content:
      'Conceptual familiarity with the concept. Never used in personal experiments or production.',
  },

  // Frontend - Styling - CSS Preprocessors
  {
    id: 'css-preprocessors',
    title: 'CSS Preprocessors',
    isRoot: false,
    markdownFile: 'css-preprocessors.mdx',
    related: 'styling',
    tags: ['frontend', 'styling', 'css'],
    proficiencyScore: 6,
    content:
      'Used Stylus in Versafleet (logistics dashboard), SASS / SCSS in Ascenda (kaligo.com, Rewards Dashboard).',
  },

  // Frontend - Build Tools
  {
    id: 'build-tools',
    title: 'Build Tools',
    isRoot: false,
    markdownFile: 'build-tools.mdx',
    related: 'frontend',
    proficiencyScore: 5,
    content:
      'Operational familarity and experience with various build tools. Able to pick up and modify to requirements as needed.',
  },

  // Frontend - Build Tools - Vite
  {
    id: 'vite',
    title: 'Vite',
    isRoot: false,
    markdownFile: 'vite.mdx',
    related: 'build-tools',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 3,
    content:
      'Used in this portfolio site. Finding it extensible; I can imagine it being scalable due to its simplicity.',
  },

  // Frontend - Build Tools - Webpack
  {
    id: 'webpack',
    title: 'Webpack',
    isRoot: false,
    markdownFile: 'webpack.mdx',
    related: 'build-tools',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 4,
    content:
      'Used in Versafleet (SPA) and Ascenda (Rails with Webpacker, monolithic).',
  },

  // Frontend - Build Tools - Babel
  {
    id: 'babel',
    title: 'Babel',
    isRoot: false,
    markdownFile: 'babel.mdx',
    related: 'build-tools',
    tags: ['frontend', 'build-tools'],
    proficiencyScore: 4,
    content:
      'Configured custom babel preset in 2015 on Versafleet to transpile its corporate site.',
  },

  // Frontend - Internationalization - i18n
  {
    id: 'internationalization-i18n',
    title: 'Internationalization - i18n',
    isRoot: false,
    markdownFile: 'internationalization-i18n.mdx',
    related: 'frontend',
    tags: ['frontend', 'i18n', 'accessibility'],
    proficiencyScore: 7,
    content:
      'i18n was a theme across my entire career. Every project had some form of i18n, from locales / translations, language detection, date/time formatting, to RTL support.',
  },

  // Frontend - Internationalization - i18n - RTL (Right-to-Left)
  {
    id: 'rtl-right-to-left',
    title: 'RTL (Right-to-Left)',
    isRoot: false,
    markdownFile: 'rtl-right-to-left.mdx',
    related: 'internationalization-i18n',
    tags: ['frontend', 'i18n', 'rtl', 'accessibility'],
    proficiencyScore: 7,
    content:
      'Implemented RTL support in Ascenda, in kaligo.com and Rewards Dashboard. Used a mix of RTL-specific CSS properties and CSS logical properties.',
  },

  // Frontend - Accessibility - a11y
  {
    id: 'accessibility-a11y',
    title: 'Accessibility - a11y',
    isRoot: false,
    markdownFile: 'accessibility-a11y.mdx',
    related: 'frontend',
    proficiencyScore: 6,
    content:
      'Enforced aria attributes, keyboard navigation support, and semantic HTML in Ascenda. Mostly used Lighthouse and WAVE to test.',
  },

  // Frontend - Accessibility - a11y - aria attributes
  {
    id: 'aria-attributes',
    title: 'aria attributes',
    isRoot: false,
    markdownFile: 'aria-attributes.mdx',
    related: 'accessibility-a11y',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 5,
    content:
      'Used aria attributes sparingly in Ascenda, the principle was to never overspecify attributes.',
  },

  // Frontend - Accessibility - a11y - keyboard navigation
  {
    id: 'keyboard-navigation',
    title: 'keyboard navigation',
    isRoot: false,
    markdownFile: 'keyboard-navigation.mdx',
    related: 'accessibility-a11y',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 6,
    content:
      'Enforced full keyboard navigation support in Ascenda (Rewards Dashboard). Supported on every component including date pickers, dropdowns, modals, etc.',
  },

  // Frontend - Accessibility - a11y - voiceover
  {
    id: 'voiceover',
    title: 'voiceover',
    isRoot: false,
    markdownFile: 'voiceover.mdx',
    related: 'accessibility-a11y',
    tags: ['frontend', 'accessibility', 'a11y'],
    proficiencyScore: 3,
    content:
      'Comes in with aria attributes usage, but voiceover support was never a theme across my career.',
  },

  // Frontend - Accessibility - a11y - semantic HTML
  {
    id: 'semantic-html',
    title: 'semantic HTML',
    isRoot: false,
    markdownFile: 'semantic-html.mdx',
    related: 'accessibility-a11y',
    tags: ['frontend', 'accessibility', 'a11y', 'html'],
    proficiencyScore: 6,
    content:
      'Used semantic HTML whenever possible across my career. One of the quickest wins for a11y.',
  },

  // Frontend - Frontend Testing
  {
    id: 'frontend-testing',
    title: 'Frontend Testing',
    isRoot: false,
    markdownFile: 'frontend-testing.mdx',
    related: 'frontend',
    proficiencyScore: 6,
    content:
      'Dealt with unit and integration tests. Jest was the main framework used in Angular projects in Ascenda.',
  },

  // Frontend - Frontend Testing - Jest
  {
    id: 'jest',
    title: 'Jest',
    isRoot: false,
    markdownFile: 'jest.mdx',
    related: 'frontend-testing',
    tags: ['frontend', 'testing'],
    proficiencyScore: 6,
    content:
      'Wrote unit and integration tests in Angular project in Ascenda (Rewards Dashboard). Wired the setup and set the conventions for the team.',
  },

  // Frontend - Frontend Testing - Jasmine
  {
    id: 'jasmine',
    title: 'Jasmine',
    isRoot: false,
    markdownFile: 'jasmine.mdx',
    related: 'frontend-testing',
    tags: ['frontend', 'testing'],
    proficiencyScore: 4,
    content:
      'Jasmine was used in the legacy AngularJS project in Ascenda (kaligo.com). Had to maintain and write unit tests for newly refactored components.',
  },

  // Frontend - Frontend Testing - Playwright
  {
    id: 'playwright',
    title: 'Playwright',
    isRoot: false,
    markdownFile: 'playwright.mdx',
    related: 'frontend-testing',
    tags: ['frontend', 'testing', 'e2e'],
    proficiencyScore: 2,
    content:
      'Familiar with the tool. Was introduced in Ascenda when I transitioend to backend, never had the chance to write E2E tests with Playwright.',
  },

  // Frontend - Web Performance
  {
    id: 'web-performance',
    title: 'Web Performance',
    isRoot: false,
    markdownFile: 'web-performance.mdx',
    related: 'frontend',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 6,
    content:
      'Old browser support was a theme across my career in Ascenda. Had to support IE8 in the legacy AngularJS project (kaligo.com), and IE11 in the Angular project (Rewards Dashboard)',
  },

  // Frontend - Web Performance - Code splitting
  {
    id: 'code-splitting',
    title: 'Code splitting',
    isRoot: false,
    markdownFile: 'code-splitting.mdx',
    related: 'web-performance',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 6,
    content:
      'Implemented code splitting whilst navigating the complexities of shared libraries and multiple tenant builds.',
  },

  // Frontend - Web Performance - Lazy loading
  {
    id: 'lazy-loading',
    title: 'Lazy loading',
    isRoot: false,
    markdownFile: 'lazy-loading.mdx',
    related: 'web-performance',
    tags: ['frontend', 'optimization', 'performance'],
    proficiencyScore: 6,
    content:
      'Implemented lazy loading of whitelabel-specific components in Angular project inAscenda (Rewards Dashboard). Lazy loaded the niche components in pages that were rarely used.',
  },

  // Backend
  {
    id: 'backend',
    title: 'Backend',
    isRoot: true,
    markdownFile: 'backend.mdx',
    proficiencyScore: 6,
    content:
      '3+ years of production experience with Ruby on Rails on a microservices architecture, with multitenancy as the main challenge and the focal point.',
  },

  // Backend - Languages / Runtimes
  {
    id: 'languages-runtimes',
    title: 'Languages / Runtimes',
    isRoot: false,
    markdownFile: 'languages-runtimes.mdx',
    related: 'backend',
    proficiencyScore: 4,
    content:
      'Used Ruby on Rails professionally. Learned Python on the side to solve DSA problems.',
  },

  // Backend - Languages / Runtimes - Ruby
  {
    id: 'ruby',
    title: 'Ruby',
    isRoot: false,
    markdownFile: 'ruby.mdx',
    related: 'languages-runtimes',
    tags: ['backend', 'language'],
    proficiencyScore: 6,
    content:
      'Able to write production code in Ruby on Rails. Experienced with Ruby language features.',
  },

  // Backend - Languages / Runtimes - Python
  {
    id: 'python',
    title: 'Python',
    isRoot: false,
    markdownFile: 'python.mdx',
    related: 'languages-runtimes',
    tags: ['backend', 'language'],
    proficiencyScore: 5,
  },

  // Backend - Frameworks / Libraries (Ruby)
  {
    id: 'frameworks-libraries-ruby',
    title: 'Frameworks / Libraries (Ruby)',
    isRoot: false,
    markdownFile: 'frameworks-libraries-ruby.mdx',
    related: 'backend',
    proficiencyScore: 6,
  },

  // Backend - Frameworks / Libraries (Ruby) - Ruby on Rails
  {
    id: 'ruby-on-rails',
    title: 'Ruby on Rails',
    isRoot: false,
    markdownFile: 'ruby-on-rails.mdx',
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'framework', 'ruby'],
    proficiencyScore: 6,
    content:
      'Refactored a critical batch job (200K redemptions in 4 hours) to be idempotent and retryable. Built schema-based validation to support differing data formats.',
  },

  // Backend - Microservices
  {
    id: 'microservices',
    title: 'Microservices',
    isRoot: false,
    markdownFile: 'microservices.mdx',
    related: 'backend',
    tags: ['backend', 'architecture'],
    proficiencyScore: 5,
    content:
      'Wrote API layer that coordinated calls to several downstream services, and ensured the logic can handle different multi-tenant configurations.',
  },

  // Backend - Frameworks / Libraries (Ruby) - Sidekiq
  {
    id: 'sidekiq',
    title: 'Sidekiq',
    isRoot: false,
    markdownFile: 'sidekiq.mdx',
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'ruby', 'background-jobs'],
    proficiencyScore: 5,
    content:
      'Refactored a batch job to be idempotent and retryable. Wrote scheduled background jobs to handle data synchronizations from downstream services.',
  },

  // Backend - Frameworks / Libraries (Ruby) - ActionCable
  {
    id: 'actioncable',
    title: 'ActionCable',
    isRoot: false,
    markdownFile: 'actioncable.mdx',
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'ruby', 'rails', 'websocket'],
    proficiencyScore: 2,
    content:
      'Familiar that it is used for 2-way client-server communication , but never used in production.',
  },

  // Backend - Frameworks / Libraries (Ruby) - Dry::Validation
  {
    id: 'dry-validation',
    title: 'Dry::Validation',
    isRoot: false,
    markdownFile: 'dry-validation.mdx',
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'ruby', 'validation'],
    proficiencyScore: 5,
    content:
      'Extensively used in custom schema validation logic to support differing data formats between bank partners.',
  },

  // Backend - Frameworks / Libraries (Ruby) - MJML - Liquid
  {
    id: 'mjml-liquid',
    title: 'MJML - Liquid',
    isRoot: false,
    markdownFile: 'mjml-liquid.mdx',
    related: 'frameworks-libraries-ruby',
    tags: ['backend', 'email', 'templates'],
    proficiencyScore: 5,
    content:
      'Used MJML as the primary engine in Ascenda to send email notifications with custom layouts and content across multiple tenants.',
  },

  // Backend - Messaging / Event Streaming
  {
    id: 'messaging-event-streaming',
    title: 'Messaging / Event Streaming',
    isRoot: false,
    markdownFile: 'messaging-event-streaming.mdx',
    related: 'backend',
    proficiencyScore: 4,
    content:
      'Used Kafka as the primary messaging system in Ascenda to handle event-driven communication between microservices.',
  },

  // Backend - Messaging / Event Streaming - Kafka
  {
    id: 'kafka',
    title: 'Kafka',
    isRoot: false,
    markdownFile: 'kafka.mdx',
    related: 'messaging-event-streaming',
    tags: ['backend', 'messaging', 'event-streaming'],
    proficiencyScore: 4,
    content:
      'Wrote several consumers and producers for small-scale data synchronizations in between other microservices.',
  },

  // Backend - Authentication / Authorization
  {
    id: 'authentication-authorization',
    title: 'Authentication / Authorization',
    isRoot: false,
    markdownFile: 'authentication-authorization.mdx',
    related: 'backend',
    proficiencyScore: 4,
  },

  // Backend - Authentication / Authorization - OAuth2
  {
    id: 'oauth2',
    title: 'OAuth2',
    isRoot: false,
    markdownFile: 'oauth2.mdx',
    related: 'authentication-authorization',
    tags: ['backend', 'authentication', 'authorization'],
    proficiencyScore: 5,
  },

  // Backend - Authentication / Authorization - JWT
  {
    id: 'jwt',
    title: 'JWT',
    isRoot: false,
    markdownFile: 'jwt.mdx',
    related: 'authentication-authorization',
    tags: ['backend', 'authentication'],
    proficiencyScore: 3,
  },

  // Backend - Authentication / Authorization - Single Sign-On
  {
    id: 'single-sign-on',
    title: 'Single Sign-On',
    isRoot: false,
    markdownFile: 'single-sign-on.mdx',
    related: 'authentication-authorization',
    tags: ['backend', 'authentication', 'sso'],
    proficiencyScore: 10,
  },

  // Backend - API Design
  {
    id: 'api-design',
    title: 'API Design',
    isRoot: false,
    markdownFile: 'api-design.mdx',
    related: 'backend',
    tags: ['backend', 'api', 'openapi'],
    proficiencyScore: 5,
  },

  // Backend - API Design - OpenAPI
  {
    id: 'openapi',
    title: 'OpenAPI',
    isRoot: false,
    markdownFile: 'openapi.mdx',
    related: 'api-design',
    tags: ['backend', 'api', 'documentation'],
    proficiencyScore: 3,
    content:
      'Documented several public-facing Partner APIs using OpenAPI, focusing on API design best practices and external integration requirements.',
  },

  // Backend - API Design - REST
  {
    id: 'rest',
    title: 'REST',
    isRoot: false,
    markdownFile: 'rest.mdx',
    related: 'api-design',
    tags: ['backend', 'api'],
    proficiencyScore: 1,
  },

  // Backend - API Design - GraphQL
  {
    id: 'graphql',
    title: 'GraphQL',
    isRoot: false,
    markdownFile: 'graphql.mdx',
    related: 'api-design',
    tags: ['backend', 'api'],
    proficiencyScore: 2,
  },

  // Backend - API Design - gRPC
  {
    id: 'grpc',
    title: 'gRPC',
    isRoot: false,
    markdownFile: 'grpc.mdx',
    related: 'api-design',
    tags: ['backend', 'api'],
    proficiencyScore: 10,
  },

  // Backend - Backend Testing
  {
    id: 'backend-testing',
    title: 'Backend Testing',
    isRoot: false,
    markdownFile: 'backend-testing.mdx',
    related: 'backend',
    proficiencyScore: 10,
  },

  // Backend - Backend Testing - RSpec
  {
    id: 'rspec',
    title: 'RSpec',
    isRoot: false,
    markdownFile: 'rspec.mdx',
    related: 'backend-testing',
    tags: ['backend', 'testing', 'ruby'],
    proficiencyScore: 1,
  },

  // Backend - Backend Testing - Postman
  {
    id: 'postman',
    title: 'Postman',
    isRoot: false,
    markdownFile: 'postman.mdx',
    related: 'backend-testing',
    tags: ['backend', 'testing', 'api'],
    proficiencyScore: 10,
  },

  // Backend - Backend Testing - FactoryBot
  {
    id: 'factorybot',
    title: 'FactoryBot',
    isRoot: false,
    markdownFile: 'factorybot.mdx',
    related: 'backend-testing',
    tags: ['backend', 'testing', 'ruby'],
    proficiencyScore: 10,
  },

  // Backend - Backend Testing - Gatling
  {
    id: 'gatling',
    title: 'Gatling',
    isRoot: false,
    markdownFile: 'gatling.mdx',
    related: 'backend-testing',
    tags: ['backend', 'testing', 'performance'],
    proficiencyScore: 3,
  },

  // Devops
  {
    id: 'devops',
    title: 'DevOps',
    isRoot: true,
    markdownFile: 'devops.mdx',
    proficiencyScore: 5,
    content:
      "Set up the team's first automated deployment pipeline using Grunt scripts and managed CI/CD processes for core applications.",
  },

  // Devops - Infrastructure as Code (IaC)
  {
    id: 'infrastructure-as-code-iac',
    title: 'Infrastructure as Code (IaC)',
    isRoot: false,
    markdownFile: 'infrastructure-as-code-iac.mdx',
    related: 'devops',
    proficiencyScore: 4,
  },

  // Devops - Infrastructure as Code (IaC) - Terraform
  {
    id: 'terraform',
    title: 'Terraform',
    isRoot: false,
    markdownFile: 'terraform.mdx',
    related: 'infrastructure-as-code-iac',
    tags: ['devops', 'iac'],
    proficiencyScore: 4,
    content:
      'Safely consumed and maintained existing configuration for AWS infrastructure, executing controlled changes (e.g., Sidekiq resource scaling).',
  },

  // Devops - Containerization & Orchestration
  {
    id: 'containerization-orchestration',
    title: 'Containerization & Orchestration',
    isRoot: false,
    markdownFile: 'containerization-orchestration.mdx',
    related: 'devops',
    proficiencyScore: 5,
  },

  // Devops - Containerization & Orchestration - Docker
  {
    id: 'docker',
    title: 'Docker',
    isRoot: false,
    markdownFile: 'docker.mdx',
    related: 'containerization-orchestration',
    tags: ['devops', 'containerization'],
    proficiencyScore: 4,
  },

  // Devops - Containerization & Orchestration - Docker - Docker Compose
  {
    id: 'docker-compose',
    title: 'Docker Compose',
    isRoot: false,
    markdownFile: 'docker-compose.mdx',
    related: 'docker',
    tags: ['devops', 'containerization', 'docker'],
    proficiencyScore: 5,
  },

  // Devops - Containerization & Orchestration - Kubernetes (k8s)
  {
    id: 'kubernetes-k8s',
    title: 'Kubernetes (k8s)',
    isRoot: false,
    markdownFile: 'kubernetes-k8s.mdx',
    related: 'containerization-orchestration',
    tags: ['devops', 'orchestration'],
    proficiencyScore: 7,
  },

  // Devops - Cloud
  {
    id: 'cloud',
    title: 'Cloud',
    isRoot: false,
    markdownFile: 'cloud.mdx',
    related: 'devops',
    proficiencyScore: 8,
  },

  // Devops - Cloud - AWS
  {
    id: 'aws',
    title: 'AWS',
    isRoot: false,
    markdownFile: 'aws.mdx',
    related: 'cloud',
    tags: ['devops', 'cloud'],
    proficiencyScore: 8,
  },

  // Devops - Cloud - AWS - EC2
  {
    id: 'ec2',
    title: 'EC2',
    isRoot: false,
    markdownFile: 'ec2.mdx',
    related: 'aws',
    tags: ['devops', 'cloud', 'aws'],
    proficiencyScore: 2,
  },

  // Devops - Cloud - AWS - S3
  {
    id: 's3',
    title: 'S3',
    isRoot: false,
    markdownFile: 's3.mdx',
    related: 'aws',
    tags: ['devops', 'cloud', 'aws'],
    proficiencyScore: 6,
  },

  // Devops - Cloud - AWS - RDS
  {
    id: 'rds',
    title: 'RDS',
    isRoot: false,
    markdownFile: 'rds.mdx',
    related: 'aws',
    tags: ['devops', 'cloud', 'aws', 'database'],
    proficiencyScore: 7,
  },

  // Devops - Cloud - AWS - IAM
  {
    id: 'iam',
    title: 'IAM',
    isRoot: false,
    markdownFile: 'iam.mdx',
    related: 'aws',
    tags: ['devops', 'cloud', 'aws', 'security'],
    proficiencyScore: 10,
  },

  // Devops - Cloud - AWS - VPC
  {
    id: 'vpc',
    title: 'VPC',
    isRoot: false,
    markdownFile: 'vpc.mdx',
    related: 'aws',
    tags: ['devops', 'cloud', 'aws', 'networking'],
    proficiencyScore: 3,
  },

  // Devops - CI/CD
  {
    id: 'ci-cd',
    title: 'CI/CD',
    isRoot: false,
    markdownFile: 'ci-cd.mdx',
    related: 'devops',
    proficiencyScore: 6,
  },

  // Devops - CI/CD - Github Actions
  {
    id: 'github-actions',
    title: 'Github Actions',
    isRoot: false,
    markdownFile: 'github-actions.mdx',
    related: 'ci-cd',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 9,
  },

  // Devops - CI/CD - Jenkins
  {
    id: 'jenkins',
    title: 'Jenkins',
    isRoot: false,
    markdownFile: 'jenkins.mdx',
    related: 'ci-cd',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 6,
  },

  // Devops - CI/CD - CircleCI
  {
    id: 'circleci',
    title: 'CircleCI',
    isRoot: false,
    markdownFile: 'circleci.mdx',
    related: 'ci-cd',
    tags: ['devops', 'ci-cd'],
    proficiencyScore: 4,
  },

  // Tooling
  {
    id: 'tooling',
    title: 'Tooling',
    isRoot: true,
    markdownFile: 'tooling.mdx',
    proficiencyScore: 7,
  },

  // Tooling - Version Control
  {
    id: 'version-control',
    title: 'Version Control',
    isRoot: false,
    markdownFile: 'version-control.mdx',
    related: 'tooling',
    proficiencyScore: 10,
  },

  // Tooling - Version Control - Git
  {
    id: 'git',
    title: 'Git',
    isRoot: false,
    markdownFile: 'git.mdx',
    related: 'version-control',
    tags: ['tooling', 'version-control'],
    proficiencyScore: 9,
  },

  // Tooling - Observability
  {
    id: 'observability',
    title: 'Observability',
    isRoot: false,
    markdownFile: 'observability.mdx',
    related: 'tooling',
    tags: ['tooling', 'monitoring'],
    proficiencyScore: 8,
  },

  // Tooling - Observability - Grafana
  {
    id: 'grafana',
    title: 'Grafana',
    isRoot: false,
    markdownFile: 'grafana.mdx',
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 8,
  },

  // Tooling - Observability - Appsignal
  {
    id: 'appsignal',
    title: 'Appsignal',
    isRoot: false,
    markdownFile: 'appsignal.mdx',
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 10,
  },

  // Tooling - Observability - Rollbar
  {
    id: 'rollbar',
    title: 'Rollbar',
    isRoot: false,
    markdownFile: 'rollbar.mdx',
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 2,
  },

  // Tooling - Observability - Datadog
  {
    id: 'datadog',
    title: 'Datadog',
    isRoot: false,
    markdownFile: 'datadog.mdx',
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 6,
  },

  // Tooling - Observability - Prometheus
  {
    id: 'prometheus',
    title: 'Prometheus',
    isRoot: false,
    markdownFile: 'prometheus.mdx',
    related: 'observability',
    tags: ['tooling', 'observability', 'monitoring'],
    proficiencyScore: 6,
  },

  // Tooling - Content (Headless CMS)
  {
    id: 'content-headless-cms',
    title: 'Content (Headless CMS)',
    isRoot: false,
    markdownFile: 'content-headless-cms.mdx',
    related: 'tooling',
    proficiencyScore: 1,
  },

  // Tooling - Content (Headless CMS) - PhraseApp
  {
    id: 'phraseapp',
    title: 'PhraseApp',
    isRoot: false,
    markdownFile: 'phraseapp.mdx',
    related: 'content-headless-cms',
    tags: ['tooling', 'i18n', 'cms'],
    proficiencyScore: 3,
  },

  // Tooling - Content (Headless CMS) - Prismic
  {
    id: 'prismic',
    title: 'Prismic',
    isRoot: false,
    markdownFile: 'prismic.mdx',
    related: 'content-headless-cms',
    tags: ['tooling', 'cms'],
    proficiencyScore: 2,
  },

  // Tooling - Testing (Cross-Browser)
  {
    id: 'testing-cross-browser',
    title: 'Testing (Cross-Browser)',
    isRoot: false,
    markdownFile: 'testing-cross-browser.mdx',
    related: 'tooling',
    proficiencyScore: 8,
  },

  // Tooling - Testing (Cross-Browser) - Browserstack
  {
    id: 'browserstack',
    title: 'Browserstack',
    isRoot: false,
    markdownFile: 'browserstack.mdx',
    related: 'testing-cross-browser',
    tags: ['tooling', 'testing'],
    proficiencyScore: 1,
  },

  // Tooling - Third-Party APIs / Services
  {
    id: 'third-party-apis-services',
    title: 'Third-Party APIs / Services',
    isRoot: false,
    markdownFile: 'third-party-apis-services.mdx',
    related: 'tooling',
    proficiencyScore: 5,
  },

  // Tooling - Third-Party APIs / Services - Geospatial
  {
    id: 'geospatial',
    title: 'Geospatial',
    isRoot: false,
    markdownFile: 'geospatial.mdx',
    related: 'third-party-apis-services',
    tags: ['tooling', 'api', 'maps'],
    proficiencyScore: 8,
  },

  // Tooling - Third-Party APIs / Services - Geospatial - Google Maps
  {
    id: 'google-maps',
    title: 'Google Maps',
    isRoot: false,
    markdownFile: 'google-maps.mdx',
    related: 'geospatial',
    tags: ['tooling', 'api', 'maps', 'geospatial'],
    proficiencyScore: 1,
  },

  // Tooling - Third-Party APIs / Services - Geospatial - Mapbox
  {
    id: 'mapbox',
    title: 'Mapbox',
    isRoot: false,
    markdownFile: 'mapbox.mdx',
    related: 'geospatial',
    tags: ['tooling', 'api', 'maps', 'geospatial'],
    proficiencyScore: 3,
  },

  // Tooling - Third-Party APIs / Services - Payment
  {
    id: 'payment',
    title: 'Payment',
    isRoot: false,
    markdownFile: 'payment.mdx',
    related: 'third-party-apis-services',
    proficiencyScore: 10,
  },

  // Tooling - Third-Party APIs / Services - Payment - Stripe
  {
    id: 'stripe',
    title: 'Stripe',
    isRoot: false,
    markdownFile: 'stripe.mdx',
    related: 'payment',
    tags: ['tooling', 'api', 'payment'],
    proficiencyScore: 5,
  },

  // Tooling - Third-Party APIs / Services - Communication
  {
    id: 'communication',
    title: 'Communication',
    isRoot: false,
    markdownFile: 'communication.mdx',
    related: 'third-party-apis-services',
    proficiencyScore: 9,
  },

  // Tooling - Third-Party APIs / Services - Communication - Twilio
  {
    id: 'twilio',
    title: 'Twilio',
    isRoot: false,
    markdownFile: 'twilio.mdx',
    related: 'communication',
    tags: ['tooling', 'api', 'communication'],
    proficiencyScore: 5,
  },

  // Tooling - Third-Party APIs / Services - Communication - Mailgun
  {
    id: 'mailgun',
    title: 'Mailgun',
    isRoot: false,
    markdownFile: 'mailgun.mdx',
    related: 'communication',
    tags: ['tooling', 'api', 'communication', 'email'],
    proficiencyScore: 7,
  },

  // Tooling - AI
  {
    id: 'ai',
    title: 'AI',
    isRoot: false,
    markdownFile: 'ai.mdx',
    related: 'tooling',
    proficiencyScore: 6,
  },

  // Tooling - AI - Cursor
  {
    id: 'cursor',
    title: 'Cursor',
    isRoot: false,
    markdownFile: 'cursor.mdx',
    related: 'ai',
    tags: ['tooling', 'ai', 'ide'],
    proficiencyScore: 8,
  },

  // Tooling - AI - Gemini
  {
    id: 'gemini',
    title: 'Gemini',
    isRoot: false,
    markdownFile: 'gemini.mdx',
    related: 'ai',
    tags: ['tooling', 'ai'],
    proficiencyScore: 7,
  },

  // Concepts
  {
    id: 'concepts',
    title: 'Concepts',
    isRoot: true,
    markdownFile: 'concepts.mdx',
    proficiencyScore: 6,
  },

  // Concepts - General Principles
  {
    id: 'general-principles',
    title: 'General Principles',
    isRoot: false,
    markdownFile: 'general-principles.mdx',
    related: 'concepts',
    proficiencyScore: 1,
  },

  // Concepts - General Principles - Idempotency
  {
    id: 'idempotency',
    title: 'Idempotency',
    isRoot: false,
    markdownFile: 'idempotency.mdx',
    related: 'general-principles',
    tags: ['concept', 'principle'],
    proficiencyScore: 8,
  },

  // Concepts - General Principles - SOLID
  {
    id: 'solid',
    title: 'SOLID',
    isRoot: false,
    markdownFile: 'solid.mdx',
    related: 'general-principles',
    tags: ['concept', 'principle'],
    proficiencyScore: 8,
  },

  // Concepts - General Principles - DRY
  {
    id: 'dry',
    title: 'DRY',
    isRoot: false,
    markdownFile: 'dry.mdx',
    related: 'general-principles',
    tags: ['concept', 'principle'],
    proficiencyScore: 5,
  },

  // Concepts - General Principles - Multitenancy
  {
    id: 'multitenancy',
    title: 'Multitenancy',
    isRoot: false,
    markdownFile: 'multitenancy.mdx',
    related: 'general-principles',
    tags: ['concept', 'architecture', 'saas'],
    proficiencyScore: 9,
  },

  // Concepts - Design Patterns
  {
    id: 'design-patterns',
    title: 'Design Patterns',
    isRoot: false,
    markdownFile: 'design-patterns.mdx',
    related: 'concepts',
    proficiencyScore: 2,
  },

  // Concepts - Design Patterns - Chain of Responsibility
  {
    id: 'chain-of-responsibility',
    title: 'Chain of Responsibility',
    isRoot: false,
    markdownFile: 'chain-of-responsibility.mdx',
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 4,
  },

  // Concepts - Design Patterns - Adapter
  {
    id: 'adapter',
    title: 'Adapter',
    isRoot: false,
    markdownFile: 'adapter.mdx',
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 2,
  },

  // Concepts - Design Patterns - Singleton
  {
    id: 'singleton',
    title: 'Singleton',
    isRoot: false,
    markdownFile: 'singleton.mdx',
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 6,
  },

  // Concepts - Design Patterns - Factory
  {
    id: 'factory',
    title: 'Factory',
    isRoot: false,
    markdownFile: 'factory.mdx',
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 6,
  },

  // Concepts - Design Patterns - Observer
  {
    id: 'observer',
    title: 'Observer',
    isRoot: false,
    markdownFile: 'observer.mdx',
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 3,
  },

  // Concepts - Design Patterns - Decorators
  {
    id: 'decorators',
    title: 'Decorators',
    isRoot: false,
    markdownFile: 'decorators.mdx',
    related: 'design-patterns',
    tags: ['concept', 'design-pattern'],
    proficiencyScore: 7,
  },

  // Database
  {
    id: 'database',
    title: 'Database',
    isRoot: false,
    markdownFile: 'database.mdx',
    related: 'backend',
    proficiencyScore: 6,
  },

  // Database - Relational
  {
    id: 'relational',
    title: 'Relational',
    isRoot: false,
    markdownFile: 'relational.mdx',
    related: 'database',
    proficiencyScore: 9,
  },

  // Database - Relational - PostgreSQL
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    isRoot: false,
    markdownFile: 'postgresql.mdx',
    related: 'database',
    tags: ['backend', 'database', 'sql'],
    proficiencyScore: 6,
    content:
      'Designed robust schemas for multi-tenant loyalty systems and performed advanced indexing for query optimization on transaction data.',
  },

  // Database - Relational - Indexing
  {
    id: 'indexing',
    title: 'Indexing',
    isRoot: false,
    markdownFile: 'indexing.mdx',
    related: 'relational',
    tags: ['database', 'sql', 'relational', 'optimization'],
    proficiencyScore: 9,
  },

  // Database - Relational - Locking
  {
    id: 'locking',
    title: 'Locking',
    isRoot: false,
    markdownFile: 'locking.mdx',
    related: 'relational',
    tags: ['database', 'sql', 'relational'],
    proficiencyScore: 9,
  },

  // Database - Relational - Transactions (ACID)
  {
    id: 'transactions-acid',
    title: 'Transactions (ACID)',
    isRoot: false,
    markdownFile: 'transactions-acid.mdx',
    related: 'relational',
    tags: ['database', 'sql', 'relational'],
    proficiencyScore: 7,
  },

  // Database - Relational - Sharding
  {
    id: 'sharding',
    title: 'Sharding',
    isRoot: false,
    markdownFile: 'sharding.mdx',
    related: 'relational',
    tags: ['database', 'sql', 'relational', 'scaling'],
    proficiencyScore: 9,
  },

  // Database - In-Memory
  {
    id: 'in-memory',
    title: 'In-Memory',
    isRoot: false,
    markdownFile: 'in-memory.mdx',
    related: 'database',
    proficiencyScore: 9,
  },

  // Database - In-Memory - Redis
  {
    id: 'redis',
    title: 'Redis',
    isRoot: false,
    markdownFile: 'redis.mdx',
    related: 'in-memory',
    tags: ['database', 'nosql', 'caching', 'queues'],
    proficiencyScore: 3,
  },

  // Database - In-Memory - Cache Keys
  {
    id: 'cache-keys',
    title: 'Cache Keys',
    isRoot: false,
    markdownFile: 'cache-keys.mdx',
    related: 'in-memory',
    tags: ['database', 'caching'],
    proficiencyScore: 6,
  },

  // Database - In-Memory - Caching Strategies
  {
    id: 'caching-strategies',
    title: 'Caching Strategies',
    isRoot: false,
    markdownFile: 'caching-strategies.mdx',
    related: 'in-memory',
    tags: ['database', 'caching'],
    proficiencyScore: 9,
  },

  // Database - NoSQL
  {
    id: 'nosql',
    title: 'NoSQL',
    isRoot: false,
    markdownFile: 'nosql.mdx',
    related: 'database',
    proficiencyScore: 2,
  },

  // Database - NoSQL - MongoDB
  {
    id: 'mongodb',
    title: 'MongoDB',
    isRoot: false,
    markdownFile: 'mongodb.mdx',
    related: 'nosql',
    tags: ['database', 'nosql'],
    proficiencyScore: 2,
  },

  // Database - NoSQL - DynamoDB
  {
    id: 'dynamodb',
    title: 'DynamoDB',
    isRoot: false,
    markdownFile: 'dynamodb.mdx',
    related: 'nosql',
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

// Export alias for backward compatibility
export const knowledges = KNOWLEDGE_DATA;

// Legacy exports for backward compatibility during migration
export const knowledgeNodes = KNOWLEDGE_DATA;
export const getNodeById = getKnowledgeById;
export const getRelatedNodes = getRelatedKnowledges;
export const getNodesByTag = getKnowledgesByTag;
