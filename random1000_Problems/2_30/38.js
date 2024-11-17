function findSubarraysWithSum(arr, target) {
  let result = [];
  let currentSum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    // Add the current element to the sum
    currentSum += arr[i];

    // If current sum exceeds target, move the start pointer to reduce the window
    while (currentSum > target && start <= i) {
      currentSum -= arr[start];
      start++;
    }

    // If current sum equals the target, record the subarray
    if (currentSum === target) {
      result.push(arr.slice(start, i + 1));
    }
  }

  return result;
}

// Test the function
const arr = [1, 2, 3, 4, 5];
const target = 5;
console.log(findSubarraysWithSum(arr, target));
