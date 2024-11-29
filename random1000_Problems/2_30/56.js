const MergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr; // Base case: If array has 1 or no element, it's already sorted
  }

  const middle = Math.floor(arr.length / 2);

  // Recursively split the array into left and right halves
  const left = MergeSortHelper(arr, 0, middle);
  const right = MergeSortHelper(arr, middle, arr.length);

  // Merge the two sorted halves
  return merge(left, right);
};

// Helper function to manually create subarrays
const MergeSortHelper = (arr, start, end) => {
  let subarray = [];
  for (let i = start; i < end; i++) {
    subarray.push(arr[i]);
  }
  return subarray;
};

// Merge function to merge two sorted arrays into one
const merge = (left, right) => {
  let res = [];
  let i = 0;
  let j = 0;

  // Merge while both arrays have elements
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  // If there are remaining elements in left
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }

  // If there are remaining elements in right
  while (j < right.length) {
    res.push(right[j]);
    j++;
  }

  return res;
};

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log(MergeSort(arr)); // Expected output: [3, 9, 10, 27, 38, 43, 82]
