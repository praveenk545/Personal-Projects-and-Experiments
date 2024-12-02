const factorial = function (n) {
  let count = 0;
  //   for (let i = 1; i <= n; i++) {
  //     count = count*i;
  //   }
  //   return count;
  while (n > 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};
let n = 67;
console.log(factorial(n));
