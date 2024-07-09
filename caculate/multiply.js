require("../xyz.js");

function calculateMultiply(a, b) {
  const result = a * b;

  console.log(result);
}

setTimeout(() => {
  console.log("setTimout");
}, 3000);

module.exports = { calculateMultiply };
