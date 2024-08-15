module.exports = {
  isItPossible: (array) => {
    if (array.length === 1) {
      return 'NO';
    }
    let max = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[max] < array[j]) {
        max = j;
      }
    }
    let max2 = 0;
    for (let jj = 1; jj < array.length; jj++) {
      if (jj === max) {
        continue;
      }
      if (array[max2] < array[jj]) {
        max2 = jj;
      }
    }

    return array[max] - array[max2] > 1 ? 'NO' : 'YES';
  },
};
