module.exports = {
  checkPathInRingroad: (number, array) => {
    let temp = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= temp) {
        temp = array[i];
        continue;
      }
      sum += number;
      temp = array[i];
    }
    return sum + temp - 1;
  },
};
