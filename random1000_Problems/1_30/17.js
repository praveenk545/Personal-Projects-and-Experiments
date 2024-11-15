const longestWord = function (str) {
  let word = "";
  let res = [];
  let i = 0;
  let max=0;
  while (i < str.length) {
    if (str[i] !== " ") {
      word += str[i];
      max=Math.max(max,word.length)
    } else if (word) {
      res.push(word);
      word = "";
    } 
    i++;
  }
  if (word) {
    res.push(word);
  }
  //console.log(res);
  //let val = find(res);
  for (let i = 0; i < res.length; i++) {
    if (res[i].length == max) {
      //return res[i];
      console.log(res[i],"value");
    }
  }
  console.log(max,"max")
};
find = function (val) {
  let max = 0;
  for (let i = 0; i < val.length; i++) {
    max = Math.max(max, val[i].length);
  }

  return max;
};

let str = "the quick brownny fox jumped over the lazy dogggerr";
console.log(longestWord(str));
