module.exports = {
  getMaxProducts: (array) => {
    let min = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[min] += 1;
    return array.reduce((a, b) => a * b, 1);
  },
};
