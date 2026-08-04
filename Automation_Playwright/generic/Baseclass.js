const { chromium, firefox, webkit } = require("playwright");
const AutomationConstants = require("./AutomationConstants");

class Baseclass
{
    constructor()
    {
        this.browser=null;
        this.context=null;
        this.page=null;
    }

    async openApplication()
    {
        try
        {
            const browserSelected=(AutomationConstants.BROWSER || "").toLowerCase();
            switch(browserSelected)
             {
                case AutomationConstants.FIREFOX_BROWSER:
                {
                    console.log("Launching fireforx browser for automation.");
                    this.browser = await firefox.launch({
                    headless: AutomationConstants.HEADLESS,
                });
                break;
                }
                case AutomationConstants.CHROMIUM_BROWSER: 
                {
                    console.log("Launching Chrome browser for automation.");
                    this.browser = await chromium.launch({
                    headless: AutomationConstants.HEADLESS,
                });
                break;
                }
                case AutomationConstants.WEBKIT_BROWSER: 
                {
                    console.log("Launching Webkit browser for automation.");
                    this.browser = await webkit.launch({
                    headless: AutomationConstants.HEADLESS,
                });
                break;
                }
                default:
                {
                    console.log("Chrome broswer launching be default for automation.");
                }
             }
        console.log("Browser launched successfully.");
        // open the aplication by using the url so first create the page and the open the web page. you want.
        // create a new context
        this.context = await this.browser.newContext();
        // context to create your page. webpage.
        this.page = await this.context.newPage();
        // you navigate to your application by using the url and the page, variable name. ( you kept)
        await this.page.goto(AutomationConstants.APPLICATION_URL);
        console.log("Appllication has beenlaunched.");
        }

        catch(error)
        {
            console.log(error);
            console.log("Error occured while launching application")
        }
        return this.page;
    }

    async closeApplication()
    {
        try
        {
            await this.page.waitForTimeout(AutomationConstants.MEDIUM_WAIT);
            await this.browser.close();
            this.browser = null;
            this.context = null;
            this.page = null;
            console.log("Apllication and Browser closed successfully.");
        }
        catch(error)
        {
            console.log(error);
            console.log("Error occured while closing the application");
        }
    }
}
module.exports = Baseclass;