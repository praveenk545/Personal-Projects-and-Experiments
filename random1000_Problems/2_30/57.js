function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;

  // Initialize the DP array, where each element starts with length 1
  let dp = new Array(nums.length).fill(1);
  //console.log(dp);
   let count=0;
  // Loop through the array to fill the DP array
  for (let i = 1; i < nums.length; i++) {
   // console.log(nums[i]);
    for (let j = 0; j < i; j++) {
       //console.log(j);
      if (nums[i] > nums[j]) {
      //  console.log(nums[j]);
     // console.log(count++)
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // The length of the longest increasing subsequence is the max value in dp
  // return dp;
  return Math.max(...dp);
}

// Example Input
const input = [10, 9, 2, 5, 3, 7, 101, 18];

// Example Output
console.log(lengthOfLIS(input)); // Output: 4
