const strToNumber = function (str) {
  for (let i = 0; i < str.length; i++) {
    if (typeof str[i] == "string") {
      //console.log(str[i])
      str[i] += str[i];
    }
  }
  return str;
};
let str = "1234";
console.log(strToNumber(str));
