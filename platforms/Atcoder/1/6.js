maximumOfDigits = (a, b, c) => {
  //   let res = [a, b, c];
  //   let max = 0;
  //   max = Math.max(...res);
  //   return max;
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
};
let a = 1;
let b = 2;
let c = 3;
console.log(maximumOfDigits(a, b, c));
