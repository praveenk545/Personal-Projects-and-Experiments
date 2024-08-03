var reverseWords = function (s) {
  //   const lowerText = s.toLowerCase();
  //   const word = lowerText.split(/\s+/);
  //   let text = "";
  //   let index = 0;
  //   for (let w of word) {
  //     if (s.startsWith(w, index)) {
  //       if (text.length > 0 ) {
  //         text = "";
  //       }
  //       text += word;
  //       index += word.length;
  //     }
  //   }
  const words = s.trim().split(/\s+/);

  // Reverse the array of words
  const reversedWords = words.reverse();

  // Join the reversed words with a single space
  return reversedWords.join(" ");
};
const s = "the sky is blue";
console.log(reverseWords(s));
