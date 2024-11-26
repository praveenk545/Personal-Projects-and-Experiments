function toRoman(num) {
  // Define the Roman numeral symbols and their corresponding values.
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  // Iterate through the Roman numerals array
  for (let i = 0; i < romanNumerals.length; i++) {
    const { value, symbol } = romanNumerals[i];

    // While the number is greater than or equal to the Roman numeral value
    while (num >= value) {
      result += symbol; // Append the Roman symbol to the result
      num -= value; // Subtract the Roman numeral value from the number
    }
  }

  return result;
}

// Example usage:
console.log(toRoman(4)); // Output: "MMMDXLIX"
