// Count the number of vowels (a, e, i, o, u) in a string.

const vowels = (str) => {
  let vow = "aeiou";
  let c=0;

  

  for(let i=0;i<str.length;i++){
    if(vow.includes(str[i])){
        c++;
    }
  }
  return c;
};
let str="hello world";
console.log(vowels(str));
console.log(vowels('king'));
// Object(obj).entries().forEach(([key,value]) => {
//     console.log(key,value)
// });