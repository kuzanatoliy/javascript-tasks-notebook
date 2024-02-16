module.exports = {
  getUniqueNumber: (array) => {
    if (array[0] === array[1]) {
      return array[2];
    }

    if (array[0] === array[2]) {
      return array[1];
    }

    return array[0];
  },
};
