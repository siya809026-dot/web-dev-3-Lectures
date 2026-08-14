// const os = require('os');
// const path = require('path');
// const fs = require('fs');
// const crypto = require('crypto');
// const { hostname } = require('os');
// const dns = require('dns');
const process = require('process');
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
// const data = fs.readFileSync("sample.txt", "utf-8"); // synchronous
// console.log(data);

// fs.readFile("sample.txt", "utf-8", (err, data) => { // asynchronous
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });
//pre installed which are provided by node js
// fs.writeFileSync("./sample.txt","hello this is updated content for the written file method")
// fs.writeFile("./sample.txt","hello from siya from btech cse ai/ml section g thanks",(err)=>{
//     if(err)console.log(err)
// })
// fs.appendFileSync("./sample.txt","\n vani is from navy")
// fs.unlinkSync("./file.txt")
// fs.renameSync("./sample.txt","newfile.txt")
// fs.copyFileSync("./newfile.txt","./copyfile.txt")
// const passward = "Alex@1235"
//same hash code generate
//const hash = crypto.createHash("sha256").update(passward).digest("hex");
//console.log(hash);
// const salt = crypto.randomBytes(16).toString("hex")
//console.log(salt)
// const hash = crypto.createHash("sha256",salt).update(passward).digest("hex")
// console.log(hash)

// dns.lookup("www.google.com",(err,address,family)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(address);
//         console.log(family);
//     }
// })
// dns.reverse("8.8.8.8",(err,hostnames)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(hostnames)
//     }
// })

const data = process.argv;
console.log(data)
console.log(Number(data[2])+Number(data[3]));
console.log(process.version)
console.log(process.platform)
console.log(process.pid)
