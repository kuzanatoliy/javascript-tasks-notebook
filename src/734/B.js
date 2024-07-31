module.exports = {
  getSumNiceNumbers: (array) => {
    let min = Math.min(array[0], array[2], array[3]);
    let sum = min * 256;
    array[0] -= min;
    array[2] -= min;
    array[3] -= min;
    min = Math.min(array[0], array[1]);
    sum += min * 32;
    return sum;
  },
};
