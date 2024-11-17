const gcd = function (a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    console.log(b, "b");
    a = temp;
  }
  return a;
};
let a = 24;
let b = 36;
console.log(gcd(a, b));
