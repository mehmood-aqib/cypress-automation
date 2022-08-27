/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />

class AddLiquidity {

    LiquidityDropdown() {
        return cy.contains('Liquidity')
    } 

    dropdownItems(){
        return cy.get('.MuiList-root')
    }

    selectLiquidityDropdownItem(item) {
        return cy.contains(item)
    }

    verifyLiquidityPage(heading){
        return cy.contains(heading)
    }

    connectWallet() {
        cy.get('#demo-controlled-open-select').click()
        cy.get('[data-value="rinkeby"] > .MuiBox-root > .MuiTypography-root').click()
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess().should("be.true");
        cy.switchToCypressWindow();
    }

    importFirstToken(tokenAddress) {
        // clicking the select button
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(0)').click()

        cy.findByPlaceholderText('Search by token name or paste address').type(tokenAddress)
        cy.wait(2000)
        cy.contains('Import').click()
    }

    importSecondToken(tokenAddress) {
        // clicking the select button
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(1)').click()
        
        cy.findByPlaceholderText('Search by token name or paste address').type(tokenAddress)
        cy.wait(2000)
        cy.contains('Import').click()
    }

    EnterLiquidityAmount(amount) {
        // enter amount of liquidity you want to add
        cy.get('body').find('input:nth(3)').type(amount)
    }

    ConfirmAddLiquidityTx() {
        // confirming the liquidity tx
        cy.contains('Add liquidity').click()
        cy.wait(2000)
        cy.confirmMetamaskTransaction({gasFee: 0.00160376 , gasLimit: 1069170})
        cy.switchToCypressWindow();
    }

    confirmliquidityAdded() {
        // check your position
        cy.contains('Liquidity Positions').should('exist')
    }


}
export default AddLiquidity