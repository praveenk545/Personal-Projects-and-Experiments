const RotateanArray = function (arr, k) {
    const n = arr.length;
    
    // Handle edge case: if k is greater than the length of the array, reduce it
    k = k % n;
    console.log(k)
  
    // Loop to rotate the array by k positions
    for (let i = 0; i < k; i++) {
      // Remove the last element and insert it at the beginning
      const lastElement = arr.pop();
      arr.unshift(lastElement);
    }
  
    // Return the rotated array
    return arr;
  };
  
  const arr = [1, 2, 3, 4, 5];
  const k = 2;
  console.log(RotateanArray(arr, k));  // Output will be [4, 5, 1, 2, 3]
  