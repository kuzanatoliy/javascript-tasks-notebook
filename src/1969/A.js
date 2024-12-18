module.exports = {
  getMinCountOfInvites: (array) => {
    for (let j = 0; j < array.length; j++) {
      if (array[array[j] - 1] - 1 === j) {
        return 2;
      }
    }
    return 3;
  },
};
