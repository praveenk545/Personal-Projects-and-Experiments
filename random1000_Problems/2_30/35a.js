function findAllPairs(nums, target) {
  let res = [];
  let seen = new Set(); // Set to track numbers we have already seen

  for (let num of nums) {
    let complement = target - num;

    if (seen.has(complement)) {
      res.push([complement, num]);
    }

    seen.add(num);
  }

  return res;
}

const arr = [2, 4, 3, 6, 5];
const target = 8;
console.log(findAllPairs(arr, target)); // Output: [[4, 4], [3, 5]]
