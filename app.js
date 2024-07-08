require("./xyz.js"); //  one module into another

const util = require("node:util");

const { calculateSum, calculateMultiply } = require("./caculate");

const data = require("./data.json");

console.log(data);

var name = "Namaste NodeJS";

var a = 10;

var b = 20;

calculateSum(a, b);
calculateMultiply(a, b);
