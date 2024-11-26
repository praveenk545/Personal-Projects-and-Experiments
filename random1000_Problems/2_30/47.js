function firstRepeatedCharacter(str) {
  let seen = new Set(); // Set to track characters we have encountered

  for (let char of str) {
    if (seen.has(char)) {
      return char; // Return the first repeated character
    }
    seen.add(char); // Add the character to the set
  }

  return null; // Return null if no repeated character is found
}

// Test the function with input "abca"
console.log(firstRepeatedCharacter("abbca")); // Output: "a"
