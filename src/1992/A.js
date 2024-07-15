module.exports = {
  getMaxCountOfBananas: (array) => {
    for (let j = 0; j < 5; j++) {
      array.sort((a, b) => a - b);
      array[0]++;
    }
    return array[0] * array[1] * array[2];
  },
};
