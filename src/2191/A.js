module.exports = {
  isItPossibleToColor: (arr) => {
    const temp = arr
      .map((item, ind) => [item, ind % 2])
      .sort((a, b) => a[0] - b[0]);
    for (let j = 1; j < temp.length; j++) {
      if (temp[j - 1][1] === temp[j][1]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
