const {chromium}=require("playwright");
const Baseclass=require("../../generic/Baseclass");
const Allverification=require("../../generic/Allverification");
const Excel=require("../../generic/Excel");
const AutomationConstants = require("../../generic/AutomationConstants");

(async()=>{
        const page = await Baseclass.openApplication();
        try
        {
            const expectedTitle=Excel.getexcelData(AutomationConstants.EXCEL_SHEET_PATH,"HomePage",0,0);
            const expectedUrl=Excel.getexcelData(AutomationConstants.EXCEL_SHEET_PATH,"HomePage",0,1);
            await Allverification.verifyTitle(page,expectedTitle);
            await Allverification.verifyUrl(page ,expectedUrl);
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