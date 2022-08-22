/// <reference types="Cypress"/>
class AddLiquidity {


    clickLiquidityDropdown() {
        cy.contains('Liquidity', { timeout: 2000 }).click()
        cy.wait(1000 * 2)
        cy.get('.MuiList-root').should('be.visible')
        cy.wait(1000)
    }

    selectAddLiquidity() {
        cy.get('[tabindex="0"] > a').click()
        cy.contains('Select Pair').should('exist')

        // selecting Position from dropdown
        // cy.get(':nth-child(2) > a')
        // cy.get('.jss781 > .MuiGrid-container > :nth-child(2) > .MuiTypography-root').should('exist')

        // selecting Migrate from dropdown
        // cy.get(':nth-child(3) > a')
        // cy.get('.MuiGrid-align-items-xs-flex-start > :nth-child(2)').should('exist')
    }

    connectWallet() {
        cy.get('#demo-controlled-open-select').click()
        cy.get('[data-value="rinkeby"] > .MuiBox-root > .MuiTypography-root').click()
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess().should("be.true");
        cy.switchToCypressWindow();
        cy.wait(1000)
    }

    selectTokenFirst() {
        cy.wait(1000*2)
        // clicking the select button
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(0)').click()
        cy.findByPlaceholderText('Search by token name or paste address').type('0x5Ba627f0821873d1e301f553AA0D2F0291F6f3b3')
        cy.contains('Import').click()
        // cy.contains('OZN').click()
    }

    selectTokenSecond() {
        cy.wait(1000*3)
        // clicking the select button
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(1)').click()
        cy.findByPlaceholderText('Search by token name or paste address').type('0xccf61A200BB10A32aF653848D2Ae802f9C545488')
        cy.contains('Import').click()
        // cy.contains('MET').click()
        cy.wait(1000*3)
    }

    settingInitialValue(){
        cy.wait(1000*10)
        cy.get('.MuiContainer-maxWidthSm').find('input:nth(2)').type('2')
    }


}
export default AddLiquidity