const findPeakElement = function (arr) {
  const n = arr.length;

  // Edge case: If the array has only one element, it is a peak.
  if (n === 1) {
    return arr[0];
  }

  // Check the first element (it only has one neighbor)
  if (arr[0] > arr[1]) {
    return arr[0];
  }

  // Check the last element (it only has one neighbor)
  if (arr[n - 1] > arr[n - 2]) {
    return arr[n - 1];
  }

  // Check the rest of the elements
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return arr[i];
    }
  }
};

// Example usage:
const arr = [1, 3, 20, 4, 1];
console.log(findPeakElement(arr)); // Output: 20
