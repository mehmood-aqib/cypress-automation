/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../pages/0-auth'
import AddLiquidity from '../pages/1-addNewLiquidity'
import AddExistingLiquidity from '../pages/2-addExistingLiquidity';


const auth = new BaiscAuth();
const liquidity = new AddLiquidity();
const existLiquidity =  new AddExistingLiquidity();

describe('Opening Unipilot website', () => {

    it('1- Visit Url and bypass basic Auth', () => {
        auth.login('https://beta.unipilot.io/add')
        cy.wait(1000 * 2)
    })

    it('2- Connect wallet', () => {
        liquidity.connectWallet();
    })

    it('3- Select tokens', () => {
        existLiquidity.selectTokenFirst();
        existLiquidity.selectTokenSecond();
    })

    it('4- Add Liquidity Amount', () => {
        liquidity.setLiquidity()
    })

    it('5- Check your Position', () => {
        existLiquidity.confirmliquidityAdded()
    })

})