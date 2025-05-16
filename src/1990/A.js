module.exports = {
  isItPossibleToWin: (arr) => {
    const counts = new Array(arr.length + 1).fill(0);
    for (let j = 0; j < arr.length; j++) {
      counts[arr[j]]++;
    }
    for (let jj = 0; jj < counts.length; jj++) {
      if (counts[jj] % 2 === 1) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
