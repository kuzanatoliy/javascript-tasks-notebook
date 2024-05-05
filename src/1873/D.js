module.exports = {
  getCountOfOperations: (length, string) => {
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === 'B') {
        count++;
        j += length - 1;
      }
    }
    return count;
  },
};
