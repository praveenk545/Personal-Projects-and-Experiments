// const passwordValidator = function (min, max, char, password) {
//   if (password.length === 0) return "not valid password";
//   let index = password[0];

//   if (Math.max(password.length) >= max && password.length > min) {
//     for (let i = 1; i <= password.length; i++) {
//       if (index !== password[i]) {
//         password[i] = index;
//       } else {
//         return "not valid Password";
//       }
//     }
//   } else {
//     return "not valid Password";
//   }
//   return "its valid password";
// };

const passwordValidator = function (passwordRulles) {
  let valid = 0;
  for (let rule of passwordRulles) {
    let [rulePart, password] = rule.split(": ");
    let [rangePart, char] = rulePart.split(" ");
    let [min, max] = rangePart.split("-").map(Number);
    // console.log(min, max);
    charcount = 0;
    for (let i = 0; i < password.length; i++) {
      if (char == password[i]) {
        charcount++;
      }
    }
    if (charcount >= min && charcount <= max) {
      valid++;
    }
  }
  return valid;
};
let min = 1;
let max = 3;
let char = "a";
let password = "abcd";
let inputData = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];
console.log(passwordValidator(inputData));
