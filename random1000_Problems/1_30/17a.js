const longestWord = function (str) {
  let word = "";
  let longest = ""; // To keep track of the longest word
  let i = 0;

  while (i < str.length) {
    if (str[i] !== " ") {
      word += str[i]; // Accumulate characters in 'word'
    } else if (word) {
      // If we encounter a space and 'word' is not empty
      if (word.length > longest.length) {
        longest = word; // Update 'longest' if 'word' is longer
      }
      word = ""; // Reset the word accumulator
    }
    i++;
  }
   
  // Handle the last word (if any) after the loop
  if (word && word.length > longest.length) {
    longest = word;
  }

  return longest;
};

let str = "the quick brownny fox jumped overover the lazy dogggerr";
console.log(longestWord(str));
