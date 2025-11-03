module.exports = {
  getCountOfVotes: (arr) => {
    const num = arr.length + 1;
    const sum = arr.reduce((a, b) => a + b, 0);
    let count = 0;
    for (let j = 1; j < 6; j++) {
      count += (sum + j) % num !== 1;
    }
    return count;
  },
};
