/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../pages/0-auth'
import AddLiquidity from '../pages/1-addLiquidity'

const auth = new BaiscAuth();
const liquidity = new AddLiquidity();
describe('Opening Unipilot website', () => {
    // beforeEach(() => {
    //     cy.viewport(1109, 660)
    // })

    it('Visit Url and bypass basic Auth', () => {
        // const auth = new BaiscAuth();
        auth.login()
        cy.wait(1000*6)
    })

    it('Visit add liquidity page', () => { 
        // const liquidity = new AddLiquidity();
        liquidity.clickLiquidityDropdown();
        liquidity.selectAddLiquidity();
    })

    it('Connect wallet', () => {
        liquidity.connectWallet();

    })

    it('Select tokens', () => {
        liquidity.selectTokenFirst();
        liquidity.selectTokenSecond();
     })

     it('Create Vault', () => {
        liquidity.settingInitialValue()
        liquidity.createVault()
     })

})