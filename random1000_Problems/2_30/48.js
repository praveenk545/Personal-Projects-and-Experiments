// ## 48. **Remove All Occurrences of a Character in a String**

// **Problem**: Remove all occurrences of a given character in a string.

// **Example Input**:
// ```javascript
// "hello world", "l"
// ```

// **Example Output**:
// ```javascript
// "heo word"
// ```

const remove = function (str, t) {
  let ans = [];
  let i = 0;
  while (i <= str.length) {
    if (str[i] !== t) {
      ans.push(str[i]);
    }
    i++;
  }
  return ans.join("");
};
let str = "hello world";
let t = "l";
console.log(remove(str, t));
