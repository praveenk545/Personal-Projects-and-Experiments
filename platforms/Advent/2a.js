const passwordValidator = function (passwordRules) {
  let validPasswords = 0;

  // Loop through each password rule
  for (let rule of passwordRules) {
    // Split rule and password by ": "
    let [rulePart, password] = rule.split(": ");

    // Extract min, max, and char from the rule part
    let [rangePart, char] = rulePart.split(" ");
    let [minCount, maxCount] = rangePart.split("-").map(Number);

    // Count occurrences of char in password
    let charCount = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] === char) {
        charCount++;
      }
    }

    // Check if the count is within the range [minCount, maxCount]
    if (charCount >= minCount && charCount <= maxCount) {
      validPasswords++;
    }
  }

  return validPasswords;
};

// Test input
let inputData = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

// Test the function
console.log(passwordValidator(inputData)); // Expected output: 2
