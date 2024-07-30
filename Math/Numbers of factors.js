//Numbers of factors

var commonFactors = function (a, b) {
  let count = 0;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      count++;
    } else {
      0;
    }
  }
  return count;
};
// Test case
const a = 12,
  b = 6;
//const a = 25, b = 30;
console.log(commonFactors(a, b));
