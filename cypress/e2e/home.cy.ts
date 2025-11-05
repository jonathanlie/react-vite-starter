/**
 * E2E Test: Home Page
 *
 * Tests user flows on the home page including:
 * - Page navigation
 * - Language switching
 * - Accessibility features
 */
describe('Home Page E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays home page content', () => {
    cy.contains('Home Page').should('be.visible');
    cy.contains('This is the home page').should('be.visible');
  });

  it('navigates to about page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('About Page').should('be.visible');
  });

  it('switches language to Spanish', () => {
    cy.get('select').select('es');
    cy.contains('Página de Inicio').should('be.visible');
  });

  it('has accessible navigation', () => {
    cy.get('nav').should('have.attr', 'role', 'navigation');
    cy.get('main').should('have.attr', 'role', 'main');
    cy.get('main').should('have.attr', 'id', 'main-content');
  });

  it('supports keyboard navigation', () => {
    cy.get('body').tab();
    cy.focused().should('contain', 'Skip to main content');

    cy.get('body').tab();
    cy.focused().should('contain', 'Home');
  });
});

