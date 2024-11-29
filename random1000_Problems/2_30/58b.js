const Median = function (arr1, arr2) {
  if (arr1.length > arr2.length) {
    [arr1, arr2] = [arr2, arr1];
  }
  const m = arr1.length;
  const n = arr2.length;
  let low = 0;
  let high = m;
  while (low <= high) {
    const partition_1 = Math.floor((low + high) / 2);
    const partition_2 = Math.floor((m + n + 1) / 2) - partition_1;
    console.log(partition_1, partition_2);
    low++;
  }
 // return low;
};
const nums1 = [1, 3];
const nums2 = [2];
console.log(Median(nums1, nums2));
