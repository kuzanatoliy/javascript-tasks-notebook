module.exports = {
  getMaxAbsSum: (array) => {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += Math.abs(array[j]);
    }
    return sum;
  },
};
