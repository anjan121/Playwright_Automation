const path = require("path");
const AutomationConstants = require("./AutomationConstants");
// i want to create that screen shot folder if its not created.
const { createfolder } = require("./Fileutils");

// const {
//   getCurrentDate,
//   getCurrentTime,
//   getCurrentTimeStamp,
// } = require("./DateUtils");

// fucntion to take screen shot.
async function captureScreenshot(
  page,
  screenshotName = AutomationConstants.DEFAULT_SCREENSHOT_NAME,
) {
  try {
    // folder creation is done ( if it doent not exists)
    createfolder(AutomationConstants.SCREENSHOT_FOLDER);
    // screenshot file name is also done/ given with extension as .png
    const screenshotFileName =
      screenshotName +
      "_" +AutomationConstants.SCREENSHOT_EXTENSION; // screenshot_.png
      
      // actally storing the screen shot in the folder
      const screenshotPath = path.join(AutomationConstants.SCREENSHOT_FOLDER, screenshotFileName);
      
      // taking screenshot
      await page.screenshot({ path: screenshotPath })
      
      console.log("Screenshot stored successfully, in location : " + screenshotPath);
      

    return screenshotPath;
  } catch (error) {
    console.log(error);
    console.log("Error in capturing Screenshot");
    return null;
  }
}


module.exports = { captureScreenshot };