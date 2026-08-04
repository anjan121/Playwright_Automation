const {chromium} = require("playwright");

(async() => { 

    const browser = await chromium.launch({headless : false});
    const page = await browser.newPage();

    await page.goto("http://localhost:5173/");
    await page.waitForTimeout(3000);
    console.log("Title : " + await page.title());
    console.log("Url : " + await page.url());


    await page.goto("https://biokart.com/");
    await page.waitForTimeout(3000);
    console.log("Title : " + await page.title());
    console.log("Url : " + await page.url());

    await page.goBack();
    await page.waitForTimeout(3000);
    console.log("Title : " + await page.title());
    console.log("Url : " + await page.url());

    await page.goForward();
    await page.waitForTimeout(3000);
    console.log("Title : " + await page.title());
    console.log("Url : " + await page.url());

    await browser.close();
    
})();