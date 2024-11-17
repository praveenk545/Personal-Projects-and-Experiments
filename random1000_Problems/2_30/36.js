// Anagram of a Palindrome
function Palindrome(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    word = str[i] + word;
  }
  return word===str?true:false;
}
const str = "civic";

console.log(Palindrome(str));
