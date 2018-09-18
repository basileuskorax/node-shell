const cb = () => {
  console.log("hi");
};
const fs = require("fs");
module.exports = data = () => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) throw err;
    else process.stdout.write(files.join("\n"));
  });
};
