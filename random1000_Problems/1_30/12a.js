const reverseWords = function(str) {
    let words = [];      // Array to store words
    let word = '';       // Temporary variable to store the current word

    // Step 1: Loop through the string to extract words
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {  // If the current character is not a space
            word += str[i];     // Add it to the current word
        } else if (word) {      // If we encounter a space and there's a word
            words.push(word);   // Push the word to the words array
            word = '';          // Reset the current word
        }
    }
    
    // Step 2: Push the last word (if any) to the array
    if (word) {
        words.push(word);
    }

    // Step 3: Manually reverse the array and construct the result string
    let reversedStr = '';
    for (let i = words.length - 1; i >= 0; i--) {
        reversedStr += words[i];  // Add each word to the result string
        if (i > 0) {
            reversedStr += ' ';    // Add a space between words
        }
    }

    return reversedStr;
};

console.log(reverseWords("Hello World from OpenAI"));  // Output: "OpenAI from World Hello"
