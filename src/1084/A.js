module.exports = {
  getMinElectricityCount: (arr) => {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += 4 * j * arr[j];
    }
    return sum;
  },
};
