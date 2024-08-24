// note : modules protect their variables and functions from leaking variables
//so we need to export the modules
console.log("Sum module get exeuted");
//x is defined in non strict mode which is allowed
x="var x from sum module";

function calSumFromSum(x,y){
    console.log(x+y);
}
// module.exports={
//     calSumFromSum:calSumFromSum,
//     x:x
// };

//OR
module.exports={
    calSumFromSum,
    x,
};




//OR
// console.log(module.exports) // => {}
// module.exports.calSumFromSum=calSumFromSum;
// module.exports.x=x;


