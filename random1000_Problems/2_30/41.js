const findAllPrimeNumbers = (n) => {
  let res = [];
  if (n <= 1) {
    return res; // Return an empty array for numbers <= 1
  }

  for (let num = 2; num <= n; num++) {
    let isPrime = true;
     console.log(num);
    for (let i = 2; i * i <= num; i++) {
      //  console.log(i);
      // console.log(num);
      if (num % i === 0) {
        isPrime = false;
        break; // No need to check further once we find a divisor
      }
    }
    if (isPrime) {
      res.push(num); // Add prime number to result array
    }
  }
  return res;
};

console.log(findAllPrimeNumbers(10)); // Output: [2, 3, 5, 7]
