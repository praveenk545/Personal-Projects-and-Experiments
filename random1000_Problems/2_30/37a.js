function merge(arr) {
  // Step 1: Sort the intervals by the starting point
  arr.sort((a, b) => a[0] - b[0]);

  const res = []; // Array to store merged intervals

  // Step 2: Iterate through the sorted intervals
  for (let i = 0; i < arr.length; i++) {
    let currentInterval = arr[i];

    // If the result array is empty or no overlap with the last interval
    if (res.length === 0 || res[res.length - 1][1] < currentInterval[0]) {
      // No overlap, so push the current interval
      res.push(currentInterval);
    } else {
      // Overlap, so merge the current interval with the last one
      res[res.length - 1][1] = Math.max(
        res[res.length - 1][1],
        currentInterval[1]
      );
    }
  }

  // Step 3: Return the merged intervals
  return res;
}

// Test the function with your example
const arr = [
  [1, 3],
  [2, 4],
  [5, 7],
  [6, 8],
];

console.log(merge(arr)); // Output: [[1, 4], [5, 8]]
