const allEven = function (arr, n = 4) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      res.push(arr[i]);
    }
  }
  return res.length === n ? "YES" : "NO";
};
const arr = [2, 4, 6, 8];
console.log(allEven(arr));
