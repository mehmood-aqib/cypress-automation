/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../pages/0-auth'
import AddLiquidity from '../pages/1-addNewLiquidity'
import PositionLiquidity from '../pages/3-positionLiquidity';
import AddExistingLiquidity from '../pages/2-addExistingLiquidity';
import IncreaseLiquidity from '../pages/4-IncreaseLiquidity';


const auth = new BaiscAuth();
const liquidity = new AddLiquidity();
const position = new PositionLiquidity()
const existLiquidity =  new AddExistingLiquidity();
const increase = new IncreaseLiquidity()


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

    it('5- Move to Increase Liquidity', () => {
        increase.clickIncreaseLiquidity()
    })

    it('6- Add Liquidity to increase', () => {
        liquidity.setLiquidity()
    })

    it('7- Confirm Liquidity Increased', () => {
        existLiquidity.confirmliquidityAdded()
    })

})