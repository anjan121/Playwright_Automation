const {chromium}=require("playwright");
const Baseclass=require("../../generic/Baseclass");
const Allverification=require("../../generic/Allverification");

(async()=>{
        const page = await Baseclass.openApplication();
        try
        {
            await Allverification.verifyTitle(page,"Home | ECODERS");
            await Allverification.verifyUrl(page , "http://localhost:5173");
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