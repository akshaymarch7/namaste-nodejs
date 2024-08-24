console.log("xyz module get executed");

// x is defined in non strict mode
export var x="var x from xyz module";
export function calSumFromXyz(x,y){
    console.log(x+y);
}
