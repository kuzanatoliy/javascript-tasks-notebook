module.exports = {
  getCountOfGames: (costs, coins) => {
    let c = 0;
    for (let j = 0; j < costs.length && c < coins.length; j++) {
      if (costs[j] <= coins[c]) {
        c++;
      }
    }
    return c;
  },
};
