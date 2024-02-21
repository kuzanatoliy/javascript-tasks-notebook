module.exports = {
  isReorderingExist: (array) => {
    let evensSum = 0;
    let oddsSum = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 === 0) {
        evensSum += array[j];
      } else {
        oddsSum += array[j];
      }
    }
    return evensSum > oddsSum ? 'YES' : 'NO';
  },
};
