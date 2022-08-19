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

## Synpress Setting up:
#### First setup Cypress
- Create an empty folder having name of your choice.
- Open folder in visual studio code.
- Ceate a package inside that empty folder using ``` npm init -y ```
- Now install cypress using the command ``` npm i cypress``` 
- After that open cypress using the command ```npx cypress open ```
- Cypress will open and ask you to configure it. Just follow the steps and you are done.
- Cypress will then show you the browser to open and you need to select the desire browser.
- You can add a spec file in the cypress browser.
- After that in VS code you can add a test file in the format "fileName.cy.js" under the e2e folder.
- At the top of each file mention ``` /// <reference types="Cypress"/> ``` for autocompleting.
- Now you can write the test cases.

#### Now setup Synpress
- First of all install Synpress using command ``` npm i @synthetixio/synpress ```
- Then install ``` npm install env-cm ```

**Note: The env-cmd package installs an executable script named env-cmd which can be called before your scripts to easily load environment variables from an external file.**

- Add below script to package.json:
```
"scripts": {
    "test": "env-cmd -f .env npx synpress run -cf synpress.json --config supportFile='cypress/support/e2e.js'"
}
```
**Note: I removed this ``` --config supportFile='cypress/support/e2e.js ``` from the above script because it was not working for me with this part.**

- Now import/paste the following in support/e2e.js
```
import './commands'
import "@synthetixio/synpress/support";
```

#### Add .env file
- Now add the .env file to root level that includes seedphrase and the network name you want to connect in the below format.
```
NETWORK_NAME=kovan
SECRET_WORDS="test, test, test, test, test, test, test, test, test, test, test, test"
```

#### Add synpress.json file
- Now add the synpress.json file at the root level that includes the configuration of synpress having the following the code:
```
{
    "baseUrl": "https://app.unipilot.io/",
    "userAgent": "synpress",
    "retries": { "runMode": 0, "openMode": 0 },
    "integrationFolder": "cypress/e2e",
    "chromeWebSecurity": true,
    "viewportWidth": 1366,
    "viewportHeight": 850,
    "component": {
      "componentFolder": ".",
      "testFiles": "**/*cy.{js,jsx,ts,tsx}"
    },
    "env": {
      "coverage": false
    },
    "defaultCommandTimeout": 30000,
    "pageLoadTimeout": 30000,
    "requestTimeout": 30000,
    "supportFile": "cypress/support/e2e.js"
  }
```

#### Run the test
- As we added scripts to our package.json we can now easily run our test with ``` npm run test ``` which stands for ``` env-cmd -f .env npx synpress run -cf synpress.json ```
