const readline = require("readline");

// Create interface for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function findRank(n, scores, targetScore) {
  // Step 1: Manually sort the scores in descending order using Bubble Sort
  for (let i = 0; i < n - 1; i++) {
    console.log(i);
    for (let j = 0; j < n - i - 1; j++) {
      if (scores[j] < scores[j + 1]) {
        // Swap scores[j] and scores[j + 1]
        let temp = scores[j];
        scores[j] = scores[j + 1];
        scores[j + 1] = temp;
      }
    }
  }

  // Step 2: Find the rank of the targetScore
  for (let i = 0; i < n; i++) {
    if (scores[i] === targetScore) {
      return i + 1; // Rank is index + 1 (1-based rank)
    }
  }
}

// Input handling
rl.question("Enter the number of students: ", (n) => {
  rl.question("Enter the scores (space-separated): ", (scoresInput) => {
    rl.question("Enter the target score: ", (targetScore) => {
      // Parse the inputs
      n = parseInt(n);
      const scores = scoresInput.split(" ").map(Number);
      targetScore = parseInt(targetScore);

      // Output the rank
      console.log(findRank(n, scores, targetScore));

      // Close the readline interface
      rl.close();
    });
  });
});

// Enter the number of students: 5
// Enter the scores (space-separated): 100 90 85 95 100
// Enter the target score: 90
// 4
