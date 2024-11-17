function findKthLargest(nums, k = 2) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        temp = nums[j];
      }
    }
  }
  const ans = nums[nums.length-k];
  return ans;
}
const arr = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(arr, k));
