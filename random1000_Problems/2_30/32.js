const gcd = function (a = 35, b = 25) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    //   console.log(b, "b");
    a = temp;
  }
  console.log(a, "a");
  return a;
};
function lcm(a, b) {
  const val = Math.abs(a * b) / gcd(a, b);
  const g = gcd(a, b);
  return val * g;
}
console.log(lcm(70, 25));
const l = lcm(4, 6);
console.log(l, "lcm");
