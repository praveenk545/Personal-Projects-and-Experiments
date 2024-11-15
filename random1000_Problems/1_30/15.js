const missingNumber = function (nums) {
  const n = nums.length + 1;
  const value = (n * (n + 1)) / 2;
  console.log(value);
  const value2 = nums.reduce((acc, curr) => {
    if (curr !== null) {
      acc += curr;
    }
    return acc;
  }, 0);
  console.log(value2);
  return value-value2;
};
let nums = [1, 2, 4, 5, 6];
console.log(missingNumber(nums));
