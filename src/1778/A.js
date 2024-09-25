module.exports = {
  getMaxSum: (array) => {
    let [sum] = array;
    let f = -4;
    for (let j = 1; j < array.length; j++) {
      sum += array[j];
      const c = (array[j - 1] + array[j]) * -2;
      if (f < c) {
        f = c;
      }
    }
    return sum + f;
  },
};
