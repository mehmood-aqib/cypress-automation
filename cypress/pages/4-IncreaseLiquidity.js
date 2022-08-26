/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />

class IncreaseLiquidity {

    clickIncreaseLiquidity(){
        cy.contains('Increase Liquidity').click()
        cy.contains('OZN').should('exist')
        cy.contains('MET').should('exist')
        cy.wait(3000)
    }

}
export default IncreaseLiquidity