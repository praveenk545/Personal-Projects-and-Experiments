function mergeIntervals(arr) {
  // Sort intervals by the starting point
  arr.sort((a, b) => a[0] - b[0]);

  const merged = [];

  for (let i = 0; i < arr.length; i++) {
    // If merged is empty or the current interval doesn't overlap with the last merged interval
    if (merged.length === 0 || merged[merged.length - 1][1] < arr[i][0]) {
      // No overlap, add the current interval
      merged.push(arr[i]);
    } else {
      // Overlap, merge the intervals by updating the end of the last interval
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        arr[i][1]
      );
    }
  }

  return merged;
}

// Test the function
const arr = [
  [1, 3],
  [2, 4],
  [5, 7],
  [6, 8],
];

console.log(mergeIntervals(arr));
