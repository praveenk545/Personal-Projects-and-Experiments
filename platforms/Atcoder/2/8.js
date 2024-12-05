// function findSmallestMultiple(n) {
//   let currentNum = 8;
//   let remainder = currentNum % n;
//   let length = 0;
//   let res = [];

//   while (remainder !== 0) {
//     // Append another '8' to the number (which is like multiplying by 10 and adding 8)
//     length += 1;
//     currentNum = (currentNum * 10 + 8) % n;
//     //console.log(currentNum);
//     remainder = currentNum;
//     res.push(remainder);
//   //  console.log(res);
//   }

//   // Return the smallest number formed by `length` '8's
//   return "8".repeat(length);
// }

// // Input reading
// const n = 7
// console.log(n,"N")

// // Output the result
// console.log(findSmallestMultiple(n));

const smallestNUm = function (n) {
  let count = 0;
  let number = 8;
  let remainder = number % n;
  let res = [];
  console.log((number = number * 10 + 8),"number");
  while (remainder !== 0) {
    number = (number * 10 + 8) % n;
    //console.log(number)
    remainder = number;
    //console.log(number);
    res.push(remainder);
  }
  console.log(res);
  return new Array(res.length).fill(8).map(Number).join("");
};
const n = 7;
console.log(smallestNUm(n));
