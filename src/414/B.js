module.exports = {
  getNumberOfGoodSequences: (n, k) => {
    const max = Math.floor(n / 2);
    const combinationsCount = new Array(n + 1).fill(1);
    combinationsCount[0] = 0;

    for (let _ = 1; _ < k; ++_) {
      for (let i = max; i > 0; --i) {
        const cursor = combinationsCount[i];
        const options = ~~(n / i);

        for (let j = 2; j <= options; ++j) {
          combinationsCount[i * j] =
            (combinationsCount[i * j] + cursor) % 1000000007;
        }
      }
    }

    return combinationsCount.reduce((acc, cur) => (acc + cur) % 1000000007, 0);
  },
};
