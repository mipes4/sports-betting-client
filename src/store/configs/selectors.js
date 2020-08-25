export const selectScores = (state) => {
  // console.log("What returns my selectScores selector?", state.configs.scores);
  return state.configs.scores;
};

export const selectRounds = (state) => {
  // console.log("What returns my selectScores selector?", state.configs.rounds);
  return state.configs.rounds;
};

export const selectCurrentGame = (state) => {
  // console.log("What returns my selectScores selector?", state.configs.rounds);
  return state.configs.currentGame;
};

export const selectCurrentRound = (state) => {
  // console.log("What returns my selectScores selector?", state.configs.rounds);
  return state.configs.currentRound;
};

export const selectTeams = (state) => {
  // console.log("What returns my selectScores selector?", state.configs.rounds);
  return state.configs.teams;
};
