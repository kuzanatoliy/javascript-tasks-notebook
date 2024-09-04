module.exports = {
  getCountOfRestoredPower: (array, power) => {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j];
    }
    return power > sum ? 0 : sum - power;
  },
};
