const parenthesesBalanced = function (value) {
  let start = 0;
  let end = value.length - 1;
  let count = 0;
  while (start < end && end > start) {
    //start <= end
    // let check = value[start].concat(value[end]);
   // console.log(check);
    if (value[start] === "(") {
      count++;
    } else if (value[end] === ")") {
      count--;
    }
   
    start++;
    end--;
  }
  if (count < 0) {
    return false;
  }
  console.log(end, start);
  return count === 0;
};
let input = "(()(())";
console.log(parenthesesBalanced(input));
