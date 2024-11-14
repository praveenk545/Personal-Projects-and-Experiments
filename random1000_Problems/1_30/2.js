const Palindrome = (p) => {
  let s = p.toString().split("").reverse().join("");
  if (s === p) {
    return "Palindrome";
  } else {
    return "not a Palindrome";
  }
};
console.log(Palindrome("hello"))
console.log(Palindrome("amma"))
