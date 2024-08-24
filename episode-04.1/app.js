// const {calculateMultiply}=require('./calculate/multiply.js')
// const {calculateSum}=require('./calculate/sum.js')

const{calculateMultiply,calculateSum}=require('./calculate/index.js');
// OR
// const{calculateMultiply,calculateSum}=require('./calculate');
const jsondata=require("./data");



var a=10;
var b=20;
calculateMultiply(a,b);
calculateSum(a,b);


console.log(jsondata);
console.log(JSON.stringify(jsondata));