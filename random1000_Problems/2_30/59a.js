const RotateanArray = function (arr, k) {
  const n = arr.length;

  // Handle edge case: if k is greater than the length of the array, reduce it
  k = k % n;

  // Create a new array to hold the rotated values
  const rotatedArr = new Array(n);

  // Place the elements in the new array based on the rotation
  for (let i = 0; i < n; i++) {
    rotatedArr[(i + k) % n] = arr[i];
  }

  // Copy the rotated array back to the original array
  for (let i = 0; i < n; i++) {
    arr[i] = rotatedArr[i];
  }

  // Return the rotated array
  return arr;
};

const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(RotateanArray(arr, k)); // Output will be [4, 5, 1, 2, 3]
