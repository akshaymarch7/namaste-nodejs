const fs=require("fs");
const a=10;

setImmediate(()=>{console.log("setImmediate")});

fs.readFile('./file.txt','utf-8',(err,data)=>{
    console.log("file reading cb",data);
})

setTimeout(()=>{console.log("timer expired")},0);

function printA(){
    console.log("a = ",a);
}

printA();
console.log("last line of the file");