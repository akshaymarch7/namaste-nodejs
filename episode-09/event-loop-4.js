
const fs=require("fs");
setImmediate(()=>{console.log("setImmediate")});
setTimeout(()=>{console.log("Timer Expired"),0});
Promise.resolve("promise").then(console.log);

fs.readFile('./file.txt','utf-8',(err,data)=>{
   setTimeout(()=>{console.log("2nd timer"),0});
    process.nextTick(()=>{console.log("2nd nextTick")})
    setImmediate(()=>{console.log("setImmediate")})

    console.log("file reading cb ", data)
})

process.nextTick(()=>{console.log("nextTick")})
console.log("last line of file");
