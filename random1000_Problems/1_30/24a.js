const firstOccurrence = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let res = -1;

  // Sort the array before applying binary search
  arr.sort((a, b) => a - b);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      res = mid; // Found a target, but continue searching on the left
      end = mid - 1; // Keep searching on the left side to find first occurrence
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return res;
};

const arr = [30, 10, 20, 30, 40, 50];
const target = 30;
console.log(firstOccurrence(arr, target)); // Output will be the index of the first occurrence of 30
