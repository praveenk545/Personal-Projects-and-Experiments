function findSubarraysWithSum(arr, target) {
  let res = [];
  let total = 0;
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    while (total > target && start <= i) {
      total = total - arr[start];
      start++;
    }
    if (total === target) {
      res.push(arr.slice(start, i + 1));
    }
  }
  return res;
}
const arr = [1, 2, 3, 4, 5];
const target = 5;
console.log(findSubarraysWithSum(arr, target));
