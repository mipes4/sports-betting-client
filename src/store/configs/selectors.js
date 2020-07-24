export const selectScores = (state) => {
  // console.log("What returns my selectScores selector?", state.configs.scores);
  return state.configs.scores;
};

export const selectRounds = (state) => {
  // console.log("What returns my selectScores selector?", state.configs.rounds);
  return state.configs.rounds;
};
