const titleCase = function (str) {
    // Split the string into an array of words
    return str
      .split(" ")  // Split by spaces to get individual words
      .map(word => {
        // Capitalize the first letter and make the rest lowercase
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");  // Join the words back with spaces
  };
  
  let str = "hello world";
  console.log(titleCase(str));  // Output: "Hello World"
  