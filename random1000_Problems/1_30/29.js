const missingChar = function (charArr) {
  const start = charArr[0].charCodeAt(0);
  const end = charArr[charArr.length - 1].charCodeAt(0);
  // console.log(end);
  for (let i = start; i < end; i++) {
    if (!charArr.includes(String.fromCharCode(i))) {
      return String.fromCharCode(i);
    }
  }
};
const charArr = ["a", "b", "d", "e"];
console.log(missingChar(charArr));
