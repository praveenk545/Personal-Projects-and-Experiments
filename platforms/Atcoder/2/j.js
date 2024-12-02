const useDP = function (arr) {
  dp = new Array(arr.length).fill(0);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // if (dp[i] == 0) {
    //   count += arr[i];
    //   dp[i] = count;
    // }
    count+=arr[i];
    arr[i]=count;
  }
  return arr;
};
let arr = [1, 2, 3, 4, 5];
console.log(useDP(arr));
