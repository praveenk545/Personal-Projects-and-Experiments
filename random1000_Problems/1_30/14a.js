const anagrams = function (str1, str2) {
    // If lengths are not equal, they cannot be anagrams
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Create frequency maps for both strings
    const freq1 = {};
    const freq2 = {};
  
    // Count the frequency of each character in both strings
    for (let i = 0; i < str1.length; i++) {
      freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
      freq2[str2[i]] = (freq2[str2[i]] || 0) + 1;
    }
  console.log(freq1)
    // Compare the frequency maps
    for (let char in freq1) {
      if (freq1[char] !== freq2[char]) {
        return false;
      }
    }
  
    return true;
  };
  
  let str1 = "listen";
  let str2 = "silent";
  console.log(anagrams(str1, str2));  // Should return true
  