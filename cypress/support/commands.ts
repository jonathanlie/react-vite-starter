/// <reference types="cypress" />
// ***********************************************
// Custom Cypress Commands
//
// Add reusable commands here for E2E tests
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Navigate to a route and wait for it to load
       * @example cy.navigateTo('/about')
       */
      navigateTo(path: string): Chainable<void>;
      /**
       * Check if an element has proper ARIA attributes
       * @example cy.checkAriaLabel('nav', 'navigation')
       */
      checkAriaLabel(selector: string, role: string): Chainable<void>;
    }
  }
}

/**
 * Navigate to a route
 */
Cypress.Commands.add('navigateTo', (path: string) => {
  cy.visit(path);
  cy.get('main').should('be.visible');
});

/**
 * Check ARIA attributes
 */
Cypress.Commands.add('checkAriaLabel', (selector: string, role: string) => {
  cy.get(selector).should('have.attr', 'role', role);
});

export {};

