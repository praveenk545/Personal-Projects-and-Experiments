reverse = function (nums) {
  let res = [...nums.toString()];

  //   console.log(res);
  let rev = "";
  for (let i = 0; i < res.length; i++) {
    rev = res[i] + rev;
  }
  return rev;
};
let nums = 12345;
console.log(reverse(nums));
