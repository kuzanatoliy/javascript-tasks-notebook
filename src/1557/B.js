module.exports = {
  isItPossibleToSort: (k, arr) => {
    const temp = arr
      .map((item, ind) => [item, ind])
      .sort((a, b) => a[0] - b[0]);
    let count = 0;
    for (let j = 1; j < temp.length; j++) {
      count += temp[j][1] - temp[j - 1][1] !== 1;
    }
    return count < k ? 'YES' : 'NO';
  },
};
