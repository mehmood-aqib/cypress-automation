/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../pages/0-auth'
import AddLiquidity from '../pages/1-addNewLiquidity'
import PositionLiquidity from '../pages/3-positionLiquidity';


const auth = new BaiscAuth();
const liquidity = new AddLiquidity();
const position = new PositionLiquidity()

describe('Opening Unipilot website', () => { 

    it('1- Visit Url and bypass basic Auth', () => {
        auth.login('https://beta.unipilot.io/positions')
        cy.wait(1000 * 2)
    })

    // it('2- Visit Position page', () => {
    //     liquidity.clickLiquidityDropdown();
    //     position.selectPositionfromDropdown();
    // })

    it('2- Connect wallet', () => {
        liquidity.connectWallet();
    })

    it('3- View Liquidity Position List', () => {
        position.liquidityPosition()
    })

    it('4- View Liquidity Details', () => {
        position.viewLiquiditydetails()
    })

})