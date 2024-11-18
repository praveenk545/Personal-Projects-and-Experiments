function lengthOfLongestSubstring(s) {
  let map = new Map(); // Stores characters and their most recent index
  let maxLength = 0; // Variable to store the maximum length of substring
  let start = 0; // Start of the window

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // If the character is in the map and its index is >= start, move start pointer
    if (map.has(char) && map.get(char) >= start) {
      start = map.get(char) + 1;
    }

    // Update the most recent index of the character
    map.set(char, i);

    // Calculate the length of the current valid window
    console.log(map);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}
const input = "abcabcbb";
const result = lengthOfLongestSubstring(input);
console.log(result); // Output: 3
