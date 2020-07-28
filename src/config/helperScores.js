// export const calculateScore = (results, prediction, scores) => {
//   const resultMatch = whoWins(results.homeTeam, results.awayTeam);
//   const resultPred = whoWins(prediction.homeTeam, prediction.awayTeam);
//   let currentScore = 0;
//   const guessedHome = results.homeTeam === prediction.homeTeam;
//   const guessedAway = results.awayTeam === prediction.awayTeam;

//   //   console.log("What is scores?", scores);

//   if (resultMatch === resultPred) {
//     currentScore = currentScore + scores.totoScore;
//   }

//   if (guessedHome) {
//     currentScore = currentScore + scores.goalBonus;
//   }

//   if (guessedAway) {
//     currentScore = currentScore + scores.goalBonus;
//   }

//   if (guessedHome && guessedAway) {
//     currentScore = currentScore + scores.fullScore;
//   }

//   return currentScore;
// };

// const whoWins = (homeTeam, awayTeam) => {
//   if (homeTeam > awayTeam) {
//     return "homeWins";
//   } else if (homeTeam < awayTeam) {
//     return "awayWins";
//   } else {
//     return "draw";
//   }
// };
