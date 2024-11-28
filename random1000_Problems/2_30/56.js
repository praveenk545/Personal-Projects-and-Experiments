const MergeSort = function (arr) {
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const middle = Math.floor(arr.length / 2);

  // Recursively split the array into two halves
  const left = MergeSortHelper(arr, 0, middle);  // Left subarray
  const right = MergeSortHelper(arr, middle, arr.length); // Right subarray

  // Merge the two sorted subarrays
  return merge(left, right);
};

// Helper function to get the subarray (without using slice)
const MergeSortHelper = function (arr, start, end) {
  let subarray = [];
  for (let i = start; i < end; i++) {
    subarray.push(arr[i]);
  }
  return subarray;
};

const merge = function (left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two arrays while there are elements in both
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // If there are remaining elements in the left array, add them to the result
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // If there are remaining elements in the right array, add them to the result
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
};

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(MergeSort(arr));
