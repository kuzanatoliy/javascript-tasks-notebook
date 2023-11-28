module.exports = {
  isPossibleToWin: (levels, firstWins, secondWins) => {
    const set = new Set(firstWins);
    for (let i = 0; i < secondWins.length; i++) {
      set.add(secondWins[i]);
    }
    return set.size === levels ? 'I become the guy.' : 'Oh, my keyboard!';
  },
};
