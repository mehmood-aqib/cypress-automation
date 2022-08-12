# Cypress Automation
Cypress automation of web3/dapps using the Synpress that allows us to test metamask login, authentication and interaction with smart contracts.

### What is Synpress?
Synpress is a wrapper around Cypress and also extending it with the help of Puppeteer . Resulting in custom commands which allow you to interact with MetaMask. 

### How does it work? 
It runs a global cypress before routine, that installs a MetaMask plugin, and configures it.

- passes metmask welcome page
- imports wallet
- changes network (defaults to kovan) or creates custom network and changes to it (depending on your setup)
- switches back to Cypress window and starts testing

#### So remember: 
Synpress allows us to test metamask login, authentication and interaction with smart contracts.
