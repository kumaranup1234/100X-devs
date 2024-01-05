const fs = require("fs");

fs.readFile("file1.txt", "utf-8", function (err, data){
    if(err){
        console.error("Error reading file: ", err);
    }
    // the replace function does not modify the string in place rather it returns a new modified
    // string, so we store it in new variable
    data = data.replace(/\s+/g, ' ');
    fs.writeFile("file1.txt", data, function (err){
        if (err) {
            console.error("Error reading file:", err);
        }
    });
});