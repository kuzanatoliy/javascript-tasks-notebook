module.exports = {
  getBeautifulArray: (array) => {
    const odd = [];
    const even = [];
    let sum = 0;
    let sumEven = 0;
    for (let j = 0; j < array.length; j++) {
      sum += array[j];
      if (j % 2 === 0) {
        odd.push(array[j]);
        even.push(1);
        sumEven += array[j] - 1;
        continue;
      }
      even.push(array[j]);
      odd.push(1);
    }
    return sumEven <= sum / 2 ? even : odd;
  },
};
