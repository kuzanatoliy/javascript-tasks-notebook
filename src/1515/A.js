module.exports = {
  isItPossibleToPlace: (array, k) => {
    let sum = 0;
    const res = [];
    for (let j = 0; j < array.length; j++) {
      sum += array[j];
      if (sum === k) {
        res.push(array[j + 1]);
        res.push(array[j]);
        sum += array[j + 1] || 0;
        j++;
        continue;
      }
      res.push(array[j]);
    }
    return sum === k ? ['NO'] : ['YES', res];
  },
};
