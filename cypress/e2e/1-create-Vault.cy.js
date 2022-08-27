/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />
import BaiscAuth from '../pages/0-auth'
import CreateVault from '../pages/1-createVault';
import AddLiquidity from '../pages/2-addLiquidity';


const auth = new BaiscAuth();
const createVault = new CreateVault()
const addliquidty = new AddLiquidity()


describe('Create Vault', () => {
    it('1- Visit Unipilot and bypass basic Auth', () => {
        auth.login('https://beta.unipilot.io/')
        cy.wait(1000 * 2)
    }) 

    it('2- Visit add liquidity page', () => {
        addliquidty.LiquidityDropdown().click()
        cy.wait(2000)
        addliquidty.dropdownItems().should('be.visible');
        addliquidty.selectLiquidityDropdownItem('Add').click()
        addliquidty.verifyLiquidityPage('Select Pair').should('exist')
    })

    it('3- Connect wallet', () => {
        addliquidty.connectWallet();
        cy.wait(1000)
    })

    it('4- Select tokens', () => {
        // Both the tokens should be new and never used before for adding liquidity
        addliquidty.importFirstToken('0x2475C7d1922354b1eB842451392D79FCF1e75715'); // MTC 0x2475C7d1922354b1eB842451392D79FCF1e75715
        cy.wait(3000)
        addliquidty.importSecondToken('0x4a966f41e4DB3f3190AdCB407CA511f14d9A9201'); // EAT 0x4a966f41e4DB3f3190AdCB407CA511f14d9A9201
        cy.wait(1000*6)
    })

    it('5- Create Vault', () => {
        createVault.settingInitialValue('1')
        cy.wait(2000)
        createVault.createVaultTransaction()
        cy.wait(1000*60)
    })

    it('6- Approve Tokens', () => {
        createVault.approveFirstToken('Approve MTC')
        cy.wait(1000*60)
        createVault.approveSecondToken('Approve EAT')
        cy.wait(1000*60)
    })
    
})