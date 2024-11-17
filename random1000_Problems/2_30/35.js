// Find All Pairs of Numbers That Sum to a Target

function findAllPairs(nums, target) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push([nums[i], nums[j]]);
      }
    }
  }
  return res;
}

const arr = [2, 4, 3, 6, 5];
const target = 8;
console.log(findAllPairs(arr, target));
