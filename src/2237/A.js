module.exports = {
  getMinCommonHeight: (arr) => {
    let [sum] = arr;
    let min = sum;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
      sum += min;
    }
    return sum;
  },
};
