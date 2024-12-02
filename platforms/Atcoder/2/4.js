const sum = function (arr, tr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == tr) {
        res.push([arr[i], arr[j]]);
      }
    }
  }
  return res;
};
const arr = [5, 1, 2, 8, 6];
const tr = 7;
console.log(sum(arr, tr));
