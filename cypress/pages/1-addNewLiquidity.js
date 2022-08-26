/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />

class AddLiquidity {


    clickLiquidityDropdown() {
        cy.contains('Liquidity', { timeout: 2000 }).click()
        cy.wait(1000 * 2)
        cy.get('.MuiList-root').should('be.visible')
        cy.wait(1000)
    }

    selectAddLiquidity() {
        cy.get('[tabindex="0"] > a').click()
        cy.contains('Select Pair').should('exist')
    }

    connectWallet() {
        cy.get('#demo-controlled-open-select').click()
        cy.get('[data-value="rinkeby"] > .MuiBox-root > .MuiTypography-root').click()
        cy.contains('Connect Wallet').click();
        cy.contains('Metamask').click();
        cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess().should("be.true");
        cy.switchToCypressWindow();
        cy.wait(1000)
    }

    selectTokenFirst() {
        cy.wait(1000*2)
        // clicking the select button
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(0)').click()

        // MTC 0x2475C7d1922354b1eB842451392D79FCF1e75715
        cy.findByPlaceholderText('Search by token name or paste address').type('0x2475C7d1922354b1eB842451392D79FCF1e75715')
        cy.contains('Import').click()
    }

    selectTokenSecond() {
        cy.wait(1000*3)
        // clicking the select button
        cy.get('.MuiContainer-maxWidthSm').find('button:nth(1)').click()
        
        // EAT 0x4a966f41e4DB3f3190AdCB407CA511f14d9A9201
        cy.findByPlaceholderText('Search by token name or paste address').type('0x4a966f41e4DB3f3190AdCB407CA511f14d9A9201')
        cy.contains('Import').click()
        cy.wait(1000*5)
    }

    settingInitialValue(){
        cy.wait(1000*2)
        cy.get('body').find('input:nth(5)').type('1')
        cy.wait(2000)
        // unable to use xpath in synpress giving error cy.xpath is not a function
        // cy.xpath(`//*[@id="root"]/div[3]/div/div/div[2]/div/div/div/div/div/div[4]/input`).type('1'
    }

    createVault(){
        cy.contains('Create Vault').click()
        cy.get('.MuiGrid-spacing-xs-2').find('path').click()
        cy.wait(2000)
        cy.confirmMetamaskTransaction({gasFee: 0.019, gasLimit: 12410385})
        cy.switchToCypressWindow();
        cy.wait(1000*20)
        
    }

    approveTokens() {
        // approve token 1
        cy.contains('Approve MTC').click()
        cy.wait(2000)
        cy.confirmMetamaskPermissionToSpend()
        cy.switchToCypressWindow()
        cy.wait(1000*20)
        
        // approve token 2
        cy.contains('Approve EAT').click()
        cy.wait(2000)
        cy.confirmMetamaskPermissionToSpend()
        cy.switchToCypressWindow();
        cy.wait(1000*20)
    }

    setLiquidity() {
        cy.get('body').find('input:nth(3)').type('10')
        cy.wait(2000)
        cy.contains('Add liquidity').click()
        cy.wait(2000)
        cy.confirmMetamaskTransaction({gasFee: 0.00160376 , gasLimit: 1069170})
        cy.switchToCypressWindow();
        cy.wait(1000*60)
    }

    confirmliquidityAdded() {
        // check your position
        cy.contains('Liquidity Positions').should('exist')
        cy.wait(3000)
        // check your liquidity
        cy.contains('MTC/EAT').should('exist')
    }

}
export default AddLiquidity