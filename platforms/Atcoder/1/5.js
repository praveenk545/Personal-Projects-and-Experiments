function Count(str) {
  if (str.length === 0) {
    return -1;
  }
  let count = 0;
  for (let i =0; i <= str.length; i++) {
    if (str[i] == "o") {
      count++;
    }
  }
  return count;
}
let str = "oxoo";
console.log(Count(str));
