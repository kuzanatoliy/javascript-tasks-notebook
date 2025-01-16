module.exports = {
  getMaxValue: (arr, z) => {
    let max = arr[0] | z;
    for (let j = 1; j < arr.length; j++) {
      const temp = arr[j] | z;
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  },
};
