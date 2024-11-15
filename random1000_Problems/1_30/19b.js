const titleCase = function (str) {
    let result = "";
    let newWord = true;  // Flag to indicate when a new word starts
  
    for (let i = 0; i < str.length; i++) {
      // If the current character is a space, just add it to the result and mark the next character as the start of a new word
      if (str[i] === " ") {
        result += " ";
        newWord = true;
      } else {
        // If we're at the beginning of a new word, capitalize the character
        if (newWord) {
          result += str[i].toUpperCase();
          newWord = false;
        } else {
          // Otherwise, add the character in lowercase
          result += str[i].toLowerCase();
        }
      }
    }
  
    return result;
  };
  
  let str = "hello world";
  console.log(titleCase(str));  // Output: "Hello World"
  