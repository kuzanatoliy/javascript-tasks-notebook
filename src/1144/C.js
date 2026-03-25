module.exports = {
  isItPossibleToSplit: (arr) => {
    arr.sort((a, b) => a - b);
    const res1 = [];
    const res2 = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[j + 1]) {
        if (arr[j + 2] === arr[j + 1]) {
          return ['NO'];
        } else {
          res1.push(arr[j]);
          res2.push(arr[j + 1]);
          j++;
        }
      } else {
        res1.push(arr[j]);
      }
    }
    return ['YES', res1, res2.reverse()];
  },
};
