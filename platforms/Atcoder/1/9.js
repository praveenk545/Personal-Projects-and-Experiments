const onoff = function (str) {
  let count = 0;
  let countOnes = str.split("").filter((char) => char === "1").length;
  console.log(countOnes);
  for (let i = 0; i <= str.length; i++) {
    if (str[i] == "1") {
      count++;
    }
  }
  // return countOnes % 2 == 0 ? "YES" : "NO";
  if (countOnes % 2 === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};
let str = "101";
console.log(onoff(str));
