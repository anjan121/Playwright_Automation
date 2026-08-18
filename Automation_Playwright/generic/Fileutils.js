const fs=require("fs");

function createfolder(folderPath)
{
    try {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log("Folder created successfully: " + folderPath);
        } else {
            console.log("Folder already exists: " + folderPath);
        }
    } catch (error) {
        console.log("Error while creating folder: " + error.message);
        throw error;
    }
}

module.exports={createfolder};