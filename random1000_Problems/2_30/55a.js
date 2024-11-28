const LongestCommonPrefix = function (arr) {
  if (arr.length === 0) return ""; // handle edge case if the array is empty
  let prefix = arr[0]; // Start with the first string as the prefix

  // Compare the prefix with every other string
  for (let i = 1; i < arr.length; i++) {
    let j = 0;
    // Compare characters while they are the same in both the prefix and the current string
    while (j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j]) {
      j++;
    }
    // Trim the prefix to the common part
    prefix = prefix.slice(0, j);
    // If at any point the prefix becomes an empty string, return ""
    if (prefix === "") return "";
  }

  return prefix;
};

let arr = ["flower", "flow", "flight","pillow"];
console.log(LongestCommonPrefix(arr)); // Output: "fl"
