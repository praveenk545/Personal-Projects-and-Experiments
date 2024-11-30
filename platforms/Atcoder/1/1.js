function getThirdDigit(n) {
  const numStr = n.toString();
  let ans=[...numStr];
  if(ans.length>=3){
    return ans[3-1];
  }
  // let res = [];
  // if (numStr.length >= 3) {
  //   for (let i = 0; i <= numStr.length; i++) {
  //     res.push(numStr[i]);
  //     if(i==3){
  //       k=i;
  //     }
  //   }
  // } else {
  //   return -1;
  // }

  // return res[2];
}

let n = 1243;
let k=3
console.log(getThirdDigit(n,k));
