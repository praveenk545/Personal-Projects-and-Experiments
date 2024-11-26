function isPerfectNumber(num) {
  if (num <= 1) return false; // Perfect numbers are greater than 1

  let sum = 0;

  // Find all proper divisors of num
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    // console.log(i);
    if (num % i === 0) {
      sum += i; // i is a divisor
      console.log(sum);
      if (i !== 1 && i !== num / i) {
        sum += num / i; // add the corresponding divisor
        console.log(sum);
      }
    }
  }

  // Check if the sum of divisors equals the number
  return sum === num;
}

// Test the function with input 6
console.log(isPerfectNumber(6)); // Output: true
console.log(Math.floor(Math.sqrt(6)));
