/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />

class PositionLiquidity {

    selectPositionfromDropdown() {
        cy.contains('Position').click()
        cy.wait(2000)
        cy.contains('Liquidity Positions').should('exist')
    }

    liquidityPosition(){
        cy.wait(2000)
        cy.contains('OZN/MET').should('be.visible')
        cy.wait(2000)
    }

    viewLiquiditydetails(){
        cy.contains('OZN/MET').click()
        cy.contains('Liquidity').should('exist')
        cy.contains('Total Fees Accumulated').should('be.visible')
        cy.wait(1000*10)
        // cy.go('back')
        // cy.wait(3000)
    }

}
export default PositionLiquidity