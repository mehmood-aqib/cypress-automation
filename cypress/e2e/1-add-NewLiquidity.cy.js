/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../pages/0-auth'
import AddLiquidity from '../pages/1-addNewLiquidity'

const auth = new BaiscAuth();
const liquidity = new AddLiquidity();
describe('Create Vault & Add Liquidity', () => {
    it('1- Visit Unipilot and bypass basic Auth', () => {
        auth.login('https://beta.unipilot.io/')
        cy.wait(1000 * 2)
    })

    it('2- Visit add liquidity page', () => {
        liquidity.clickLiquidityDropdown();
        liquidity.selectAddLiquidity();
    })

    it('3- Connect wallet', () => {
        liquidity.connectWallet();
    })

    it('4- Select tokens', () => {
        // Both the tokens should be new and never used before for adding liquidity
        liquidity.selectTokenFirst();
        liquidity.selectTokenSecond();
    })

    it('5- Create Vault', () => {
        liquidity.settingInitialValue()
        liquidity.createVault()
    })

    it('6- Add Liquidity Amount', () => {
        liquidity.approveTokens()
        liquidity.setLiquidity()
    })

    it('7- Check your Position', () => {
        liquidity.confirmliquidityAdded()
    })

})