const {chromium} = require("playwright");
const AutomationConstants= require("../../generic/AutomationConstants");
const Baseclass= require("../../generic/Baseclass");

(async () => {
    const getpage=await Baseclass.openApplication();
    try
    {
        console.log("Tittle : " + await getpage.title());
        console.log("Url : " + await getpage.url());
    }
    catch(error)
    {
        console.log(error);
    }
    finally
    {
        await Baseclass.closeApplication();
    }

})();