const LongestCommonPrefix = function(arr) {
    if (arr.length === 0) return ""; // Edge case: if the array is empty
    let prefix = arr[0]; // Start with the first string as the prefix
  
    // Compare the prefix with each string in the array
    for (let i = 1; i < arr.length; i++) {
      let j = 0;
      // Compare characters while they are the same in both the prefix and the current string
      while (j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j]) {
        j++;
      }
  
      // Manually adjust the prefix by truncating it to the first 'j' characters
      let newPrefix = '';
      for (let k = 0; k < j; k++) {
        newPrefix += prefix[k];
      }
      prefix = newPrefix;
  
      // If at any point the prefix becomes an empty string, return ""
      if (prefix === "") return "";
    }
  
    return prefix;
  };
  
  let arr = ["flower", "flow", "flight"];
  console.log(LongestCommonPrefix(arr)); // Output: "fl"
  