/**
 * E2E Test: Home Page
 *
 * Tests user flows on the home page including:
 * - Page navigation
 * - Language switching
 * - Accessibility features
 * - Keyboard navigation
 */
describe('Home Page E2E', () => {
  beforeEach(() => {
    cy.navigateTo('/');
  });

  it('displays home page content', () => {
    cy.contains('Home Page').should('be.visible');
    cy.contains('This is the home page of the React Vite Starter Kit').should(
      'be.visible'
    );
  });

  it('displays all feature cards', () => {
    cy.contains('i18n').should('be.visible');
    cy.contains('a11y').should('be.visible');
    cy.contains('Animations').should('be.visible');
    cy.contains('Testing').should('be.visible');
  });

  it('navigates to about page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Page').should('be.visible');
  });

  it('navigates back to home from about page', () => {
    cy.navigateTo('/about');
    cy.contains('Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.contains('Home Page').should('be.visible');
  });

  it('switches language to Spanish', () => {
    cy.get('select[aria-label*="Language"]').select('es');
    cy.contains('Página de Inicio').should('be.visible');
    cy.contains('Esta es la página de inicio').should('be.visible');
  });

  it('switches language back to English', () => {
    // Switch to Spanish first
    cy.get('select[aria-label*="Language"]').select('es');
    cy.contains('Página de Inicio').should('be.visible');

    // Switch back to English
    cy.get('select[aria-label*="Language"]').select('en');
    cy.contains('Home Page').should('be.visible');
  });

  it('has accessible navigation', () => {
    cy.checkAriaLabel('nav', 'navigation');
    cy.get('main').should('have.attr', 'role', 'main');
    cy.get('main').should('have.attr', 'id', 'main-content');
    cy.get('header').should('have.attr', 'role', 'banner');
    cy.get('footer').should('have.attr', 'role', 'contentinfo');
  });

  it('has skip link for accessibility', () => {
    cy.get('a[href="#main-content"]')
      .should('contain', 'Skip to main content')
      .should('be.visible');
  });

  it('supports keyboard navigation', () => {
    // Tab to skip link
    cy.get('body').tab();
    cy.focused().should('contain', 'Skip to main content');

    // Tab to Home link
    cy.tab();
    cy.focused().should('contain', 'Home');

    // Tab to About link
    cy.tab();
    cy.focused().should('contain', 'About');

    // Tab to language selector
    cy.tab();
    cy.focused().should('have.attr', 'aria-label');
  });

  it('handles 404 page correctly', () => {
    cy.navigateTo('/non-existent-page');
    cy.contains('404 - Page Not Found').should('be.visible');
    cy.contains("The page you're looking for doesn't exist.").should(
      'be.visible'
    );

    // Click back to home link
    cy.contains('Back to Home').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
    cy.contains('Home Page').should('be.visible');
  });
});

