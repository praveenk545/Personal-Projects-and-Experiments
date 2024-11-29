const MergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr; // Base case: if the array has one or no elements, it is already sorted
  }

  const middle = Math.floor(arr.length / 2);
  const left = MergeSort(arr.slice(0, middle)); // Recursively sort the left half
  const right = MergeSort(arr.slice(middle)); // Recursively sort the right half

  return merge(left, right);
};

const merge = function (left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  // Merge the two sorted arrays into one
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  // Push the remaining elements from either left or right
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
