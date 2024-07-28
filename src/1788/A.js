module.exports = {
  getDelimiter: (array) => {
    const indexes = [];
    for (let j = 0; j < array.length; j++) {
      if (array[j] === 2) {
        indexes.push(j);
      }
    }
    if (indexes.length % 2 === 1) {
      return -1;
    }
    if (indexes.length === 0) {
      return 1;
    }
    return indexes[indexes.length / 2 - 1] + 1;
  },
};
