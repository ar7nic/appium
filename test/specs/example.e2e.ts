import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'


const {remote} = require('webdriverio');


describe('First tests', () => {
    it('click on the phone button', async () => {
        await (await $('~Messaging')).click();
        await driver.pause(2000);
        // await (await $('~key pad')).click();
        // await driver.pause(2000);

        console.log(await browser.getContexts())

    })
})


