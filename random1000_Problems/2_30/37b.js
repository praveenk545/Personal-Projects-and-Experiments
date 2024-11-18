function mergeIntervals(arr) {
  const res = [];
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < arr.length; i++) {
    let currentInterval = arr[i];
    if (res.length === 0 || res[res.length - 1][1] < currentInterval[0]) {
      res.push(currentInterval);
    } else {
      res[res.length - 1][1] = Math.max(
        res[res.length - 1][1],
        currentInterval[1]
      );
    }
  }
  return res;
}
const arr = [
  [1, 3],
  [2, 4],
  [5, 7],
  [6, 8],
];

console.log(mergeIntervals(arr)); // Output: [[1, 4], [5, 8]]
