const fs = require("fs");
const axios = require("axios");

fs.readFile("data.txt", (err, data) => {
    if (err) throw err;
    content = data.toString();
    console.log(content);
  });

  
fs.writeFile("text.txt", "A new file has been created", (err) => {
    if (err) throw err;
    console.log("done");
  });

  