const {chromium}=require("playwright");
const Baseclass=require("../../generic/Baseclass");
const Allverification=require("../../generic/Allverification");
const Header=require("../../pom/Header");

(async()=>{
        const page = await Baseclass.openApplication();
        try
        {
            await Allverification.verifyTitle(page,"Home | ECODERS");
            await Allverification.verifyUrl(page , "http://localhost:5173");
            const header=new Header(page);
            await header.clickHomelogo();
            console.log("Clicked on Home Logo");

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