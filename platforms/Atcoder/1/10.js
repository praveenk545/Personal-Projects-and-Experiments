const MissingNumber = function (nums) {
  const n = nums.length + 1;
  const number = n * ((n + 1) / 2);
  console.log(n, number);
  const value = nums.reduce((acc, curr) => {
    if (curr) {
      acc += curr;
    }
    return acc;
  }, 0);
  console.log(value);
  return number - value;
};
let arr = [1, 2, 4, 5, 6];
console.log(MissingNumber(arr));
