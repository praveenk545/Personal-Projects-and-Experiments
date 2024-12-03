const sum = (nums) => {
  // let nums = new Array().map((m) => m);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
};
const nums = [2000, 2500, 3000, 1800];
console.log(sum(nums));
