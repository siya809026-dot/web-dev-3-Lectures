// const os = require('os');
// const path = require('path');
const fs = require('fs');
// console.log(os.platform())
// console.log(os.arch())
// console.log(os.cpus().length)
// console.log(os.homedir())
// console.log(os.totalmem()/(1024*1024*1024)+"GB");
// console.log(os.freemem()/(1024*1024*1024)+"GB");
// const filepath=path.resolve(__dirname,"core_modules.js");
// console.log(filepath);
// console.log(__dirname);
// const file = "lecture1/lecture2/core_modules.js";
// console.log(path.basename(file));//file name
// console.log(path.extname(file));//.js
// console.log(path.dirname(file));//lecture1/lecture2
const data = fs.readFileSync("sample.txt", "utf-8"); // synchronous
console.log(data);

fs.readFile("sample.txt", "utf-8", (err, data) => { // asynchronous
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
//pre installed which are provided by node js