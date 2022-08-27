/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />

class RemoveLiquidity {

    clickRemoveLiquidity() {
        cy.contains('Remove Liquidity').click()
    }

    selectAmounttoRemove(amount) {
        cy.contains(amount).click()
    }

    removeButton() {
        return cy.contains('Remove')
    }

    confirmRemoveTx() {
        cy.contains('We value your feedback').next().click()
        cy.confirmMetamaskTransaction({ gasFee: 0.00084005, gasLimit: 560035 })
        cy.switchToCypressWindow()
    }

}
export default RemoveLiquidity