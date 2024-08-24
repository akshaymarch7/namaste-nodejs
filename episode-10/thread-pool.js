const fs=require("fs");
const crypto=require("crypto");
// by default thread size is 4  
process.env.UV_THREADPOOL_SIZE=2;

crypto.pbkdf2("mypassword1","salt",500000,50,"sha512",(err,key)=>{
  console.log("1-cryptoPBKDF2 done");
})


crypto.pbkdf2("mypassword2","salt",500000,50,"sha512",(err,key)=>{
    console.log("2-cryptoPBKDF2 done");
  })

  
crypto.pbkdf2("mypassword3","salt",500000,50,"sha512",(err,key)=>{
    console.log("3-cryptoPBKDF2 done");
  })
  
  
  crypto.pbkdf2("mypassword4","salt",500000,50,"sha512",(err,key)=>{
      console.log("4-cryptoPBKDF2 done");
    })

    
  crypto.pbkdf2("mypassword5","salt",500000,50,"sha512",(err,key)=>{
    console.log("5-cryptoPBKDF2 done");
  })
