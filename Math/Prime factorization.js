//2521. Distinct Prime Factors of Product of Array

var distinctPrimeFactors = function (nums) {
  const set = new Set();
  for (let n of nums) {
    const sqrt = Math.floor(Math.sqrt(n));

    for (let i = 2; i <= sqrt; i++) {
      if (n % i === 0) {
        set.add(i);
        while (n % i === 0) {
          n = Math.floor(n / i);
        }
      }
    }
    if (n > 1) {
      set.add(n);
    }
  }
  return set.size;
};
// Test case
const nums = [2, 4, 3, 7, 10, 6];
const nums1 = [2, 4, 8, 16];
console.log(distinctPrimeFactors(nums));
