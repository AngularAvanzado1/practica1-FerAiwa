import { getCountry } from "../support/app.po";

declare var cy;
declare var context;

describe('GIVEN: A country page', () => {
  beforeEach(() => cy.visit('/country/ASM'));
  context('WHEN: user visits country details', () => {
    it('THEN: should display country information ', () => {
      getCountry();
      cy.get('li > span').should('not.be.empty');
    })
  });
  context('WHEN: user clicks in the first item of the breadcumb', () => {
    it('THEN: should navigate to the region page', () => {
      cy.get('nav span').invoke('text').should('not.be.empty');
      cy.get('nav span:first-of-type').click();
      cy.url().should('include', '/region/');
    })
  })
})
