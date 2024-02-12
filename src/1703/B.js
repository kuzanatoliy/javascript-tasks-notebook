module.exports = {
  getNumbersOfBalloons: (string) => {
    const store = new Set();
    let sum = 0;
    for (let j = 0; j < string.length; j++) {
      if (store.has(string[j])) {
        sum++;
      } else {
        store.add(string[j]);
        sum += 2;
      }
    }
    return sum;
  },
};
