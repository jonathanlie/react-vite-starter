## Versafleet

I worked on a logistics dashboard and a mobile app, written in React and React Native respectively. It was a B2B app, so it involved multi-layered forms, custom elements such as location tracker and tasks planner, e-signature support.

## kaligo.com, AngularJS

kaligo.com was a monolithy Ruby on Rails app, which served the frontend pages itself with a bundler, and the server also handles route reoslution. I've contributed in several ways, alongside the usual bug fixes and features:

- Componentized legacy directives, making them behave like modern components, preparing for eventual migration to Angular. This introduced challenges with third party libraries and other parts of the app as the states weren't encapsulated and there were a lot globals.
- Integrations with third-party libraries such as Mapbox.
- Championed writing unit tests for the newer components.
- CSS cleanup to ease addition of new components into the layout.

## Rewards Dashboard, Angular

I architected Rewards Dashboard from a greenfield state, designing it to scale for the customization of 10+ clients. The primary challenge was handling multitenancy while maintaining reasonable changes overhead. I supported this through several layers:

- Config such as theming and font variables
- i18n through support of tenant-specific translations
- Dynamic component-level replacement through tenant `componentMap`, enabling completely custom layouts for each client if needed
- shared common library of components for reuse
