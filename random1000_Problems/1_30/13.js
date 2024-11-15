function merge(arr1, arr2) {
  let result = []; // This will store the merged sorted array
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // Step 1: Compare elements from both arrays and add the smaller one to result
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // Step 2: If any elements remain in arr1, add them to result
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  // Step 3: If any elements remain in arr2, add them to result
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result; // The merged sorted array
}
// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];
console.log(merge(arr1, arr2));
