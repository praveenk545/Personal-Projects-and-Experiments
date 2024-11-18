const SumElementOddIndices = function (arr) {
  let sum = 0;

  for (let i = 1; i < arr.length; i += 2) {
    //i++
    // console.log(arr[i]);
    // sum += arr[i];
    if (i % 2 !== 0) {
      sum += arr[i];
    }
  }
  return sum;
};
const arr = [1, 2, 3, 4, 5];
console.log(SumElementOddIndices(arr));
