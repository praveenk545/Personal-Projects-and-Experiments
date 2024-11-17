function findSubarraysWithSum(arr, target) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push([arr[i], arr[j]]);
      } 
    }
    if (arr[i] === target) {
      res.push([arr[i]]);
    }
  }
  return res;
}
const arr = [1, 2, 3, 4, 5];
const target = 5;
console.log(findSubarraysWithSum(arr, target));
