module.exports = {
  isItPossibleToTransform: (map) => {
    const temp = map.split('W');
    for (let j = 0; j < temp.length; j++) {
      if (!temp[j].length) {
        continue;
      }
      let count = 0;
      for (let jj = 1; jj < temp[j].length; jj++) {
        count += temp[j][jj - 1] !== temp[j][jj];
      }
      if (!count) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
