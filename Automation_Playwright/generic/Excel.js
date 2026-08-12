const XLSX= require("xlsx");

class Excel 
{
    static getexcelData(filePath , Sheet,rownum,column)
    {
        try
        {
            const wb = XLSX.readFile(filePath);
            const sheet=wb.Sheets[Sheet];

            if (!sheet) 
            {
                console.log("Sheet not found:", Sheet);
                return "";
            }

            const cellAdd=XLSX.utils.encode_cell({r :rownum,c : column});
            const cell = sheet[cellAdd];
            if (!cell) 
            {
                console.log("Cell is empty:", cellAdd);
                return "";
            }
            console.log("Cell value:", cell.v);
            return cell.v;
        }
        catch(error)
        {
            console.log(error);
            console.log("Error in reading the Excel sheet.",error.message);
        }
            
    }
}
module.exports = Excel;