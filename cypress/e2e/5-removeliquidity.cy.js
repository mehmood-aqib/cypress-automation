/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../pages/0-auth'
import AddLiquidity from '../pages/1-addNewLiquidity'
import PositionLiquidity from '../pages/3-positionLiquidity';
import AddExistingLiquidity from '../pages/2-addExistingLiquidity';
import IncreaseLiquidity from '../pages/4-IncreaseLiquidity';
import RemoveLiquidity from '../pages/5-removeLiquidity';

const auth = new BaiscAuth();
const liquidity = new AddLiquidity();
const position = new PositionLiquidity()
const existLiquidity = new AddExistingLiquidity();
const increase = new IncreaseLiquidity()
const remove = new RemoveLiquidity()


describe('Opening Unipilot website', () => {

    it('1- Visit Url and bypass basic Auth', () => {
        auth.login('https://beta.unipilot.io/positions')
        cy.wait(1000 * 2)
    })

    it('2- Connect wallet', () => {
        liquidity.connectWallet();
    })

    it('3- View Liquidity Position List', () => {
        position.liquidityPosition()
    })

    it('4- View Liquidity Details', () => {
        position.viewLiquiditydetails()
    })

    it('5- Click Remove Liquidity', () => {
        remove.clickRemoveLiquidity()
        cy.contains('Remove Liquidity').should('be.visible')
        cy.contains('OZN/MET').should('exist')
        cy.wait(3000)
    })

    it('6- Remove 50% liquidity', () => {
        cy.contains('50%').click()
        cy.contains('Remove').click()
        cy.wait(2000)
        cy.contains('We value your feedback').next().click()
        cy.confirmMetamaskTransaction({ gasFee: 0.00084005, gasLimit: 560035 })
        cy.switchToCypressWindow();
        cy.wait(1000 * 60)
    })

    it('7- Confirm Liquidity Removed', () => {
        // check your position
        cy.contains('Liquidity Positions').should('exist')
        cy.wait(3000)
        // check your liquidity
        cy.contains('OZN/MET').should('exist')
    })

})