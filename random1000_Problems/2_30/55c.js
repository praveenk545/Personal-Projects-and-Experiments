LongestCommonPrefix = (arr) => {

  let prefix = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    while (j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j]) {
      j++;
    }
    let newPrefix = "";
    for (let k = 0; k < j; k++) {
      newPrefix += prefix[k];
    }
    prefix = newPrefix;
    if (prefix === "") return "";
  }
  return prefix;
};
let arr = ["flower", "flow", "flight", "fllow"];
console.log(LongestCommonPrefix(arr));
