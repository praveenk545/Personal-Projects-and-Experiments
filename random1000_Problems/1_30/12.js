const reverseWrd=function(str){
   let s=str.trim()             // Remove leading/trailing spaces
   .split(/\s+/) .reverse().join(' ')
   return s;
}
let s="Hello world";
console.log(reverseWrd(s))