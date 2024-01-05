const fs = require("fs");
const data = "Hi my name is anup";

fs.writeFile("a2.txt", data, function(err) {
    if (err) {
        console.error("Error reading file:", err);
    }
    console.log(data);
});