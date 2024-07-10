module.exports = {
  isItPossibleToBuildTowers: (array, towers) => {
    const temp = [];
    for (let j = 0; j < array.length; j++) {
      temp.push([j, array[j]]);
    }
    temp.sort((a, b) => a[1] - b[1]);
    const res = [];
    for (let j = 0, jj = 1; j < temp.length; j++, jj++) {
      res[temp[j][0]] = jj;
      if (jj === towers) {
        jj = 0;
      }
    }
    return ['YES', res];
  },
};
