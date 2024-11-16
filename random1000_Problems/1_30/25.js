const countWords = function (str) {
  let res = [];
  let word = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else if (word) {
      res.push(word);
      count++;
      word = "";
    }
  }
  if (word) {
    res.push(word);
    count++;
  }
  console.log(count);
  return res.length;
};
let str = "Hello world, how are you?";
console.log(countWords(str));
