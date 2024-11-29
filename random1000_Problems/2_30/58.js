findMean = (arr) => {
  const n = arr.length;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return Math.floor(count / n);
};
let arr = [1, 3];
let arr1 = [2];
console.log(findMedian(arr));
console.log(findMedian(arr1));
