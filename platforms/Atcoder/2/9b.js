const { Socket } = require("dgram");
const readline = require("readline");
// import * as readline from 'node:readline';
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
const findRank = function (n, score, targetScore) {
  //   for (let i = 0; i < n - 1; i++) {
  //     for (let j = 0; j < n - i - 1; j++) {
  //       console.log(score[j],'=>',count++);
  //       if (score[j] < score[j + 1]) {
  //         let temp = score[j];
  //         score[j] = score[j + 1];
  //         score[j + 1] = temp;
  //       }
  //     }
  //   }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (score[j] < score[j + 1]) {
        let temp = score[j];
        score[j] = score[j + 1];
        score[j + 1] = temp;
      }
    }
  }
  let res = [];
  // return score;
  for (let i = 0; i < n; i++) {
    if (score[i] >= targetScore) {
      // return i + 1;
      res.push(score[i]);
    }
  }
  return res.length >= 1 ? res : -1;
};

// handling for inputs
r1.question("Enter the number of students: ", (n) => {
  r1.question("Enter the scores (space-separated): ", (score) => {
    r1.question("Enter the target score: ", (targetScore) => {
      n = parseInt(n);
      const scores = score.split(" ").map(Number);
      targetScore = parseInt(targetScore);
      console.log(findRank(n, scores, targetScore));
      r1.close();
    });
  });
});
const n = 5;
const score = [100, 90, 85, 95, 100];
const targetScore = 90;
//console.log(findRank(n, score, targetScore));
