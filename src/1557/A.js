module.exports = {
  getSequence: (array) => {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j];
      max = max > array[j] ? max : array[j];
    }
    return (sum - max) / (array.length - 1) + max;
  },
};
