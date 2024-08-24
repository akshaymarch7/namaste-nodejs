const fs=require("fs");
setImmediate(()=>{console.log("setImmediate")});
setTimeout(()=>{console.log("timer expired")},0);
Promise.resolve("promise").then(console.log);
fs.readFile('./file.txt','utf-8',(err,data)=>{
    console.log("file reading cb ",data);
})
process.nextTick(()=>{
    process.nextTick(()=>{
        console.log("inner nextTick");
    })
    console.log("nextTick");
})
console.log("last line of code");