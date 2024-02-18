module.exports = {
  getCountOfCoins: (string) => {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === '*' && string[j + 1] === '*') {
        break;
      }
      if (string[j] === '@') {
        count++;
      }
    }
    return count;
  },
};
