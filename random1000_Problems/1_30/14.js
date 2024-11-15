const anagrams = function (str1, str2) {
  let i = 0;
  let j = 0;
  let res = [];
  if(str1.length==str2.length){
    while (i < str1.length && j < str2.length) {
        let s = str1[i].toString().split("");
        //console.log(s);
        if (str1.includes(str2[j])) {
          res.push(...s);
        }
        i++;
        j++;
      }
  }else{
    return "not a anagram";
  }
  console.log(str1.length);
 
  return str1.length === res.length ? true : false;
};
let str1 = "listn";
let str2 = "silent";
console.log(anagrams(str1, str2));
