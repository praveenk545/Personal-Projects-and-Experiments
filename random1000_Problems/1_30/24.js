const firstOccurens = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;
  while (start <= end) {
    // const mid = Math.floor(start + end) / 2;
    const mid = Math.floor((start + end) / 2);
    console.log(mid, "mid");
    if (arr[mid] === target) {
      res = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    // start++;
    // end--;
  }
  return arr[res];
};
const arr = [10, 20, 30, 30, 40, 50];
const target = 30;
console.log(firstOccurens(arr, target));
