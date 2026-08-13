const {expect} = require("@playwright/test");
class Header
{
    constructor(page)
    {
        this.page=page;
        this.headerhomelogo=page.locator("header nav a[aria-label='Go to home']");
    }

    async clickHomelogo()
    {
        await this.headerhomelogo.click();
    }

}

module.exports=Header;