module.exports = {
  getWinner: (stones) => {
    let j = 0;
    while (j < stones.length && stones[j] === 1) {
      j++;
    }
    if (j === stones.length) {
      return j % 2 === 0 ? 'Second' : 'First';
    } else {
      return j % 2 === 0 ? 'First' : 'Second';
    }
  },
};
