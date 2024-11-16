const Anagrams = function (str1, str2) {
  const obj1 = {};
  const obj2 = {};
  let start = 0;
  if (str1.length === str2.length) {
    while (start < str1.length) {
      obj1[str1[start]] = (obj1[str1[start]] || 0) + 1;
      obj2[str2[start]] = (obj2[str2[start]] || 0) + 1;
      start++;
      //console.log(start);
    }
  } else {
    return false;
  }
  for (let char in obj1) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }
   console.log(obj1, obj2);
  return true;
};
let str1 = "lismten";
let str2 = "silkent";
console.log(Anagrams(str1, str2));
