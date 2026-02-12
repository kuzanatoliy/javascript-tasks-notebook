module.exports = {
  getCountOfTurnedOffLighters: (arr) => {
    let count = 0;
    for (let j = 1; j < arr.length - 1; j++) {
      if ((arr[j - 1] === 1) & (arr[j] === 0) && arr[j + 1] === 1) {
        count++;
        j += 2;
      }
    }
    return count;
  },
};
