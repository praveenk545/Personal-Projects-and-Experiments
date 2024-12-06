const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function distinctPartitions(n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let x = n; x >= i; x--) {
      dp[x] += dp[x - i];
    }
  }

  return dp[n];
}

rl.question("Enter a number: ", (input) => {
  const n = parseInt(input);
  console.log(distinctPartitions(n));
  rl.close();
});
