// require("./path")
// All the code of the module is wrapped inside a function(IIFE)

console.log(__filename);
console.log(__dirname);

//IIFE - Immediately Invoked Function Expression

// (function (module, require) {

//     require(//path)
//     // ALL code of the module runs inside here
//     function calculateMultiply(a, b) {
//         const result = a * b;

//         console.log(result);
//       }

//       module.exports = { calculateMultiply };

// })();

// (function (exports, require, module, __filename, __dirname) {

//     // ALL THE CODE OF YOUR MODULE
// });
