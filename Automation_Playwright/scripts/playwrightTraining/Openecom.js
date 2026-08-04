const {chromium} = require("playwright");
const AutomationConstants= require("../../generic/AutomationConstants");
const Baseclass= require("../../generic/Baseclass");

(async () => {
    const base=new Baseclass() ;
    const getpage=await base.openApplication();
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
        await base.closeApplication();
    }

})();