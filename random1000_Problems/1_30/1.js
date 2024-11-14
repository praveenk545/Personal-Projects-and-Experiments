const reverseString = (str) => {
  let s1 = str.toString().split("").reverse().join("");
  console.log(s1);
  let out="";
  for(let i=0;i<str.length;i++){
    out=str[i]+out;
  }
  return out;
};
let str = "hello";
console.log(reverseString(str));
