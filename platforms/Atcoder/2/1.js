function countDigits(a, b) {
  // Step 1: Calculate the product of a and b
  let product = a * b;

  // Step 2: Initialize a counter for the number of digits
  let count = 0;
  let ans = 0;

  // Step 3: Count digits by dividing the product by 10 until it becomes 0
  while (product > 0) {
    count++;
    //console.log(count)
    //console.log(product)
    product = Math.floor(product / 10); // Remove the last digit by integer division
  }

  // Step 4: If the product is 0, we return 1 because 0 has 1 digit
  if (count === 0) {
    count = 1;
  }

  // Step 5: Output the result
  console.log(count, product);
}

// Sample Input
const a = 12;
const b = 34;

// Calling the function
countDigits(a, b);
