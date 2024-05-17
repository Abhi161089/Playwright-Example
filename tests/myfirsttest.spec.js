const {test, expect} = require('@playwright/test')

test('myfirsttest', async ({page}) => {

    await page.goto('http://qsofte.com')

})
