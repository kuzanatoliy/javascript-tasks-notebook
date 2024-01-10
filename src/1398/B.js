module.exports = {
  getScore: (string) => {
    const sums = [];
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '0') {
        continue;
      }
      let sum = 0;
      while (i < string.length && string[i] === '1') {
        sum++;
        i++;
      }
      sums.push(sum);
    }
    return sums
      .sort((a, b) => b - a)
      .filter((_, index) => index % 2 === 0)
      .reduce((sum, curr) => sum + curr, 0);
  },
};
