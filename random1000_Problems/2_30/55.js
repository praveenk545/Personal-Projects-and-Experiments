const LongestCommonPrefix = function (arr) {
  let values = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    while (j < values.length && j < arr[i].length && values[j] == arr[i][j]) {
      j++;
      console.log(j);
    }
    let prefix = "";
    for (let k = 0; k < j; k++) {
      prefix += values[k];
    }
    values = prefix;
  }
  return values;
};
let arr = ["flower", "flow", "flight"];
console.log(LongestCommonPrefix(arr));
