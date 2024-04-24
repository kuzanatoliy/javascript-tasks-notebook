module.exports = {
  getNewArray: (array) => {
    for (let j = 0; j < array.length; j++) {
      if (j % 2 === 0 && array[j] < 0) {
        array[j] *= -1;
      }
      if (j % 2 === 1 && array[j] > 0) {
        array[j] *= -1;
      }
    }

    return array;
  },
};
