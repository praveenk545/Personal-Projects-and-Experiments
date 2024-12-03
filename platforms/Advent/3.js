function findFirstTemperatureDip(temps) {
    // Start from the second day and compare each day to the previous one
    for (let i = 1; i < temps.length; i++) {
        //console.log(temps[i-1])
        if (temps[i] < temps[i - 1]) {
            return i + 1;  // Return 1-based index of the first dip
        }
    }
    return null;  // If no dip is found
}

// Example usage
const temps = [22, 25, 21, 19, 18, 20, 26];
const result = findFirstTemperatureDip(temps);
console.log(result);  // Output should be 4
