module.exports = {
  getMinTotalCost: (arr1, arr2) => {
    let [sum1] = arr1;
    let [min1] = arr1;
    for (let j = 1; j < arr1.length; j++) {
      sum1 += arr1[j];
      if (min1 > arr1[j]) {
        min1 = arr1[j];
      }
    }
    let [sum2] = arr2;
    let [min2] = arr2;
    for (let j = 1; j < arr2.length; j++) {
      sum2 += arr2[j];
      if (min2 > arr2[j]) {
        min2 = arr2[j];
      }
    }
    return Math.min(sum1 + min2 * arr1.length, sum2 + min1 * arr2.length);
  },
};
