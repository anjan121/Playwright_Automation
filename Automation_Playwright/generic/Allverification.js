const {expect}=require("@playwright/test");
const {captureScreenshot}=require("./ScreenShot");
class Allverification
{
    //Verify the Title of all Pages
    static async verifyTitle(page,expectedTitle)
    {
        try
        {
            const actualTitle= await page.title();
            await expect(page).toHaveTitle(expectedTitle);
            console.log("Title is verified, expected was : " +expectedTitle +" Actual found is : " +actualTitle);
        }
        catch(error)
        {
            await captureScreenshot(page,"Title_Missmatch");
            console.log(error.message);
            console.log("Title verification failed");
           
        }
    }

    //Verify the Partial Title of all Pages
    static async verifyPartialTitle(page,expectedTitleText)
    {
        try
        {
            const actualTitle= await page.title();
            await expect(page).toHaveTitle(new RegExp(expectedTitleText));
            console.log("Title is verified, expected was : " +expectedTitleText +" Actual found is : " +actualTitle);
        }
        catch(error)
        {
            console.log(error);
            console.log("Title verification failed");
        }
    }

    //Verify the URL of all Pages
    static async verifyUrl(page , expectedUrl)
    {
        try
        {
            const actualUrl=await page.url();
            await expect(page).toHaveURL(expectedUrl);
            console.log("Url is verified , expected was : " + expectedUrl + " Actual found is : "+actualUrl);
        }
        catch(error)
        {
            console.log(error);
            console.log("Url verification failed");
        }
    }

    //Verify the Partial URL of all Pages
    static async verifyPartialUrl(page , expectedUrlText)
    {
        try
        {
            const actualUrl=await page.url();
            await expect(page).toHaveURL(new RegExp(expectedUrlText));
            console.log("Url is verified , expected was : " + expectedUrlText + " Actual found is : "+actualUrl);
        }
        catch(error)
        {
            console.log(error);
            console.log("Url verification failed");
        }
    }
}
module.exports=Allverification;