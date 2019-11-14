import { visitHome, getRegions } from "../support/app.po";

declare var cy;
declare var context;

describe('GIVEN: The Homepage of the app', () => {
  beforeEach(() => visitHome());
  context('WHEN: user visits home page', () => {
    it('THEN: should display a list of regions', () => {
      getRegions();
      cy.get('h1').invoke('text').should('not.be.empty')
    });
  })
  context('WHEN: user clicks a region', () => {
    it('THEN: should navigate to the region page', () => {
      getRegions().each(([region]) => {
        region.click();
        cy.url().should('include', '/region/');
      })
    });
  })
});

