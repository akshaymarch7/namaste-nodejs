
const fs=require("fs");
const a=10;
setImmediate(()=>{console.log("setImmediate")});

Promise.resolve("promise").then(console.log);

fs.readFile('./file.txt','utf-8',(err,data)=>{
    console.log("file reading cb ", data)
})

setTimeout(()=>{console.log("timer expired"),0});

process.nextTick(()=>{console.log("process.nextTick")})

function printA(){
    console.log("A= ",a);
}

printA();
console.log("last line of file");
