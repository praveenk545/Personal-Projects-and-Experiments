function missingLetters(charArr) {
  let start = charArr[0].charCodeAt();
  let end = charArr[charArr.length - 1].charCodeAt();
  console.log(start, end);
  for (let i = start; i <= end; i++) {
    if (!charArr.includes(String.fromCharCode(i))) {
      return String.fromCharCode(i);
    }
  }
}
const arr = ["a", "b", "d", "e"];
console.log(missingLetters(arr));
