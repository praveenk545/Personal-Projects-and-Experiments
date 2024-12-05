function findRank(n, scores, targetScore) {
  // Sort the scores in descending order
  const sortedScores = [...scores].sort((a, b) => b - a);
  console.log(sortedScores);
  // Find the rank of the target score
  const rank = sortedScores.indexOf(targetScore) + 1; // +1 because rank starts at 1
  console.log(rank);

  return rank;
}

// Input
// const n = parseInt(prompt()); // number of students
// const scores = prompt().split(' ').map(Number); // list of student scores
// const targetScore = parseInt(19); // specific student's score to determine the rank

// Output the rank
const n = 5;
const score = [100, 90, 85, 95, 100];
const targetScore = 90;

console.log(findRank(n, score, targetScore));
