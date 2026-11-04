module.exports = {
  isItPossibleToWin: (k, arr) => {
    const store = {};
    const temp = k * 2 - 1;

    for (let j = 0; j < arr.length; j++) {
      store[arr[j]] = (store[arr[j]] || 0) + 1;
    }

    for (let jj = 0; jj < arr.length; jj++) {
      const d = store[jj] || 0;
      if (d === temp) {
        return 'YES';
      } else if (d < temp) {
        return 'NO';
      }
    }

    return 'NO';
  },
};
