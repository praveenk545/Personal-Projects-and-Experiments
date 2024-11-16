function findMissingLetter(arr) {
    // Determine the start and end of the range
    const start = arr[0].charCodeAt(0);
    const end = arr[arr.length - 1].charCodeAt(0);

    // Loop through the full range and find the missing letter
    for (let i = start; i <= end; i++) {
        if (!arr.includes(String.fromCharCode(i))) {
            return String.fromCharCode(i);
        }
    }
}

// Example usage:
console.log(findMissingLetter(['a', 'b', 'd', 'e'])); // Output: 'c'
