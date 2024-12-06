const sumOfPartition = (n) => {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  
  for (let i = 1; i <= n; i++) {
    console.log(dp)
    for (let j = n; j >= i; j--) {
      //   console.log(j);
      dp[j] += dp[j - i];
    }
  }
  return dp[n];
};
let n = 5;
console.log(sumOfPartition(n));
