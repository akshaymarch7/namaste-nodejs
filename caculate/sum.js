// Modules protect their variables and functions from leaking

//console.log("Sum Module Executed");
require("../xyz.js");
function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}

module.exports = { calculateSum };

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;
