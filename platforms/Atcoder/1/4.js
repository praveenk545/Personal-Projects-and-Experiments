function YesorNO(str) {
  let low = str.toLowerCase();
  let res = "";
  for (let i = 1; i < str.length; i++) {
    let c = low[i];
    if (str.includes(c)) {
      res += c;
    }
  }
  return res.length == 0 ? "NO" : "YES";
}
let str = "ABCDE";
console.log(YesorNO(str));
