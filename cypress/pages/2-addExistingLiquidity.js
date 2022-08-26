/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />

class AddExistingLiquidity {

    // rest of the function can be called from AddLiquidity class.
    
    selectTokenFirst() {
        cy.wait(1000*2)
        // clicking the select button
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(0)').click()

        // OZN 0x5Ba627f0821873d1e301f553AA0D2F0291F6f3b3
        cy.findByPlaceholderText('Search by token name or paste address').type('0x5Ba627f0821873d1e301f553AA0D2F0291F6f3b3')
        cy.contains('Import').click()
    }

    selectTokenSecond() {
        cy.wait(1000*3)
        // clicking the select button
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(1)').click()
        
        // MET 0xccf61A200BB10A32aF653848D2Ae802f9C545488
        cy.findByPlaceholderText('Search by token name or paste address').type('0xccf61A200BB10A32aF653848D2Ae802f9C545488')
        cy.contains('Import').click()
        cy.wait(1000*5)
    }

    confirmliquidityAdded() {
        // check your position
        cy.contains('Liquidity Positions').should('exist')
        cy.wait(3000)
        // check your liquidity
        cy.contains('OZN/MET').should('exist')
    }

}
export default AddExistingLiquidity