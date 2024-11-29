const MergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  // const left = MergeSortHelper(arr, 0, middle);
  // const right = MergeSortHelper(arr, middle, arr.length);
  // console.log(left);
  // console.log(right);
  const left = MergeSort(arr.slice(0, middle));
  const right = MergeSort(arr.slice(middle));
  console.log(left);
  console.log(right);
  return merge(left, right);
};
const MergeSortHelper = function (arr, start, end) {
  let subarray = [];
  for (let i = start; i < end; i++) {
    subarray.push(arr[i]);
  }
  return subarray;
};
const merge = function (left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }
  while (j < right.length) {
    res.push(right[j]);
    j++;
  }
  return res;
};

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(MergeSort(arr));
