const fs=require('fs');
const https=require('https');
const crypto=require("crypto");
//above require method will run in 
//synchronous fashion in commonJs

console.log("Start");

//readFileSync is blocking the main thread
fs.readFileSync('./file.txt','utf-8',(err,data)=>{
    console.log("File data fetched synchronously: ", data);
})

//just below console will execute after file read
var a=1078698;
var b=20986;

//password based key derivative function v8 deligates this task
//to libuv also con asynchronous in nature
crypto.pbkdf2("myownpassword","salt",5000,50,"sha512",(err,key)=>{
    console.log("Key is generated: ",key);
    console.log("Key in hex format: ", key.toString('hex'));
    console.log("Key in base64 format: ", key.toString('base64'));
})


https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("fetched data successfully!");
});

setTimeout(()=>{
    console.log("settimeout called after 0 sec")
},0);

fs.readFile('./file.txt','utf-8',(err,data)=>{
    console.log("File data is: ",data);
})

function mulFn(x,y){
    const result=x*y;
    return result;
}

var c=mulFn(a,b);
console.log("multiplication result is: ",c);
console.log("End")