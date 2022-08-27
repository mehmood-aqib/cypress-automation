/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../pages/0-auth'
import AddLiquidity from '../pages/2-addLiquidity';
import PositionLiquidity from '../pages/3-positionLiquidity';
import IncreaseLiquidity from '../pages/4-IncreaseLiquidity';
import RemoveLiquidity from '../pages/5-removeLiquidity';

const auth = new BaiscAuth();
const addliquidty = new AddLiquidity()
const position = new PositionLiquidity()
const increase = new IncreaseLiquidity()
const remove = new RemoveLiquidity()


describe('Remove Liquidity Provided', () => {

    it('1- Visit Url and bypass basic Auth', () => {
        auth.login('https://beta.unipilot.io/positions')
        cy.wait(1000 * 2)
    })

    it('2- Connect wallet', () => {
        addliquidty.connectWallet();
    })

    it('3- View Liquidity Position List', () => {
        position.liquidityPosition('OZN/MET').should('exist')   // pairName = OZN/MET
    })

    it('4- View Liquidity Details', () => {
        position.viewLiquiditydetails('OZN/MET')     // pairName = OZN/MET
        cy.wait(1000 * 5)
    })

    it('5- Click Remove Liquidity', () => {
        remove.clickRemoveLiquidity()
        cy.contains('Remove Liquidity').should('be.visible')
        cy.contains('50%').should('exist')
        cy.wait(3000)
    })

    it('6- Remove 50% liquidity', () => {
        remove.selectAmounttoRemove('25%')
        cy.wait(1000*2)
        remove.removeButton().click()
        remove.confirmRemoveTx()
    })

    it('7- Confirm Liquidity Removed', () => {
        // check your position
        cy.contains('Liquidity Positions').should('exist')
        cy.wait(3000)
        // check your liquidity
        cy.contains('OZN/MET').should('exist')
    })

})