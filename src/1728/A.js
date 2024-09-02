module.exports = {
  getPossibleColor: (array) => {
    let max = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[max] < array[j]) {
        max = j;
      }
    }
    return max + 1;
  },
};
