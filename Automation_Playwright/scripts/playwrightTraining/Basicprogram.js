const { chromium } = require("playwright");

(async () => {

    const browser = await chromium.launch({ headless : false });

    const page = await browser.newPage();

    await page.goto("https://biokart.com/");
    console.log("Page openend successfully");

    console.log("Title : " + await page.title());
    console.log("Url : " + await page.url());

    await browser.close();
})();