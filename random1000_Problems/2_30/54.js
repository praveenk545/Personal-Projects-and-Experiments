const wordsLength = function (str) {
  let res = [];
  let w = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      w += str[i];
    } else {
      res.push(w);
      w = "";
    }
  }
  if (w) {
    res.push(w);
  }
  return res.reverse().join(" ");
};
let str = "Hello world";
console.log(wordsLength(str));
