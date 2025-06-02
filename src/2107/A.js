module.exports = {
  isItPossibleToSplit: (array) => {
    const arr = array
      .map((item, ind) => [item, ind])
      .sort((a, b) => b[0] - a[0]);
    const res = new Array(array.length).fill(1);
    let j = 0;
    while (j < arr.length && arr[j][0] === arr[0][0]) {
      res[arr[j][1]] = 2;
      j++;
    }
    return j === arr.length ? ['NO'] : ['YES', res];
  },
};
