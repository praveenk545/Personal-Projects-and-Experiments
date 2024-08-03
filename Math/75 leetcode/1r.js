function reverseWords(s) {
  // Step 1: Trim leading and trailing spaces
  let start = 0;
  let end = s.length - 1;

  // Find the start of the first non-space character
  while (start <= end && s[start] === " ") {
    start++;
  }

  // Find the end of the last non-space character
  while (end >= start && s[end] === " ") {
    end--;
  }

  // Step 2: Extract words
  let words = [];
  let wordStart = start;

  for (let i = start; i <= end; i++) {
    if (s[i] === " " || i === end) {
      if (i === end) {
        // Include the last word if end of the string is reached
        words.push(s.substring(wordStart, i + 1));
      } else if (i > wordStart) {
        // Extract word and push it to the array
        words.push(s.substring(wordStart, i));
      }
      // Move to the next word
      wordStart = i + 1;
    }
  }

  // Step 3: Reverse the words manually
  let reversedWords = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }

  // Step 4: Construct the result
  let result = "";
  for (let i = 0; i < reversedWords.length; i++) {
    if (i > 0) {
      result += " ";
    }
    result += reversedWords[i];
  }

  return result;
}

// Example usage
const input = "  the sky  is blue  ";
const output = reverseWords(input);
console.log(output); // Output: "blue is sky the"
