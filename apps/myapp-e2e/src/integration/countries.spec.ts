import { getCountries } from "../support/app.po";
declare var cy;
declare var context;

describe('GIVEN: A region page', () => {
  beforeEach(() => cy.visit('/region/EAS'));
  context('WHEN: user visits a region page', () => {
    it('THEN: should display a list of countries with the name and flag', () => {
      getCountries();
      cy.get('h1').invoke('text').should('not.be.empty')
      cy.get('img').first().click();
      cy.url().should('include', '/country/');
    });
  });
  context('WHEN: user clicks a country', () => {
    it('THEN: should navigate to the country page', () => {
      getCountries();
      cy.get('img').first().click();
      cy.url().should('include', '/country/');
    });
  });
  /*   context('WHEN: user clicks in the region name', () => {
      it('THEN: should navigate to homepage', () => {
        // cy.url().should('be', '/regions')
      })
    }) */
});
