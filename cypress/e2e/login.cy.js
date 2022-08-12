/// <reference types="Cypress"/>

describe('Verify Unipilot Home Page', () => {
    
  it('Verify Unipilot logo is visible', () => {
      cy.visit('https://app.unipilot.io/');
      cy.get('[alt="unipilot-logo"]').should('be.visible');
  })
  
  it('Verify title is present', () => {
       cy.title().should('eq', 'Unipilot | Earn Higher Returns');
  })

  it('Connects with Metamask', () => {
      cy.contains('Connect Wallet').click();
      cy.contains('Metamask').click();
      cy.switchToMetamaskWindow();
      cy.acceptMetamaskAccess().should("be.true");
      cy.switchToCypressWindow();
   })
})