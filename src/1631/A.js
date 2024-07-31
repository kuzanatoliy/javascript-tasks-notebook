module.exports = {
  getMaxValue: (array1, array2) => {
    let max1 = 0;
    let max2 = 0;
    for (let j = 0; j < array1.length; j++) {
      if (array1[j] < array2[j]) {
        if (array1[j] > max1) {
          max1 = array1[j];
        }
        if (array2[j] > max2) {
          max2 = array2[j];
        }
      } else {
        if (array2[j] > max1) {
          max1 = array2[j];
        }
        if (array1[j] > max2) {
          max2 = array1[j];
        }
      }
    }
    return max1 * max2;
  },
};
