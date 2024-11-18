findAllSubstrings = (str) => {
  let res = [];
  let w = "";
  let n = str.length;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= n; j++) {
     // w += str[j];
      
        res.push(str.slice(i, j));
      
    }
    // w = "";
  }
  return res;
};
let str = "abc";
console.log(findAllSubstrings(str));
