// const Fibonacci = function (n) {
//   if (n <= 1) {
//     return n;
//   }

//   const val= Fibonacci(n - 1) + Fibonacci(n - 2);
//   return val
// };

// console.log(Fibonacci(11));

const Fibonacci = function (n) {
  if (n <= 1) {
    return n; // Return n directly if n is 0 or 1
  }

  let a = 0; // Fibonacci(0)
  let b = 1; // Fibonacci(1)
 let ans=[];
  for (let i = 2; i <= n; i++) {
    //  console.log(i)
    let next = a + b; // Fibonacci(i) = Fibonacci(i-1) + Fibonacci(i-2)
    a = b;
    console.log(a, "a");
    // Update a to b now a is 1
    b = next; // Update b to the next Fibonacci number
  
  }

//   return b;  // Return the nth Fibonacci number
  for (let i = 0; i <= b; i++) {
    ans.push(i);
  }
  return ans;

};

console.log(Fibonacci(11)); // Output: 5
