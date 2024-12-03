function maskedArraySum(n, integers, booleans) {
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
        if (booleans[i]) {  // Only sum the non-masked elements
            totalSum += integers[i];
        }
    }
    return totalSum;
}

// Sample input
const n = 5;
const integers = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false, true];

// Calculate and print the result
const result = maskedArraySum(n, integers, booleans);
console.log(result);  // Expected output: 9
