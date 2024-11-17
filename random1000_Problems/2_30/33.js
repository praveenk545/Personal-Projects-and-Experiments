function findKthLargest(nums, k) {
  // Selection Sort (Descending order)
  for (let i = 0; i < nums.length; i++) {
    let maxIndex = i;

    // Find the maximum element in the remaining unsorted part of the array
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[maxIndex]) {
        maxIndex = j;
      }
    }

    // Swap the found maximum element with the first element of the unsorted part
    let temp = nums[i];
    nums[i] = nums[maxIndex];
    nums[maxIndex] = temp;
  }

  // Return the k-th largest element (index is k-1)
  return nums[k - 1];
}

// Example usage
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;

console.log(findKthLargest(arr, k)); // Output: 5
