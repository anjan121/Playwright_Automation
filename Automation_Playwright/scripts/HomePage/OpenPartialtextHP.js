const {chromium}=require("playwright");
const Baseclass=require("../../generic/Baseclass");
const Allverification=require("../../generic/Allverification");

(async()=>{
        const page = await Baseclass.openApplication();
        try
        {
            await Allverification.verifyPartialTitle(page,"Home");
            await Allverification.verifyPartialUrl(page , "5173");
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