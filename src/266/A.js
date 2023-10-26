module.exports = {
  stayUniqueStones: (stones) => {
    let sum = 0;
    for (let i = 1; i < stones.length; i++) {
      if (stones[i - 1] === stones[i]) {
        sum++;
      }
    }
    return sum;
  },
};
