export const selectMatches = (state) => {
  return state.matches.data;
};

export const selectCurrentRoundMatches = (state) => {
  return state.matches.curRoundMatches;
};
