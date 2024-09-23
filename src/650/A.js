module.exports = {
  getCountOfPairs: (pairs) => {
    pairs.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      }
      return a[0] - b[0];
    });

    let count = 0;
    let total = 0;

    for (let i = 1; i < pairs.length; i++) {
      if (pairs[i - 1][0] === pairs[i][0]) {
        count++;
      } else {
        total += (count * (count + 1)) / 2;
        count = 0;
      }
    }
    total += (count * (count + 1)) / 2;
    count = 0;

    pairs.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      }
      return a[1] - b[1];
    });

    for (let i = 1; i < pairs.length; i++) {
      if (pairs[i - 1][1] === pairs[i][1]) {
        count++;
      } else {
        total += (count * (count + 1)) / 2;
        count = 0;
      }
    }
    total += (count * (count + 1)) / 2;
    count = 0;

    for (let i = 1; i < pairs.length; i++) {
      if (pairs[i - 1][0] === pairs[i][0] && pairs[i - 1][1] === pairs[i][1]) {
        count++;
      } else {
        total -= (count * (count + 1)) / 2;
        count = 0;
      }
    }
    total -= (count * (count + 1)) / 2;
    return total;
  },
};
