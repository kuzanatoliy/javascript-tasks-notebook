module.exports = {
  isItPossilbeToWin: (arr, x, k) => {
    const store = new Array(arr.length + 1).fill(0);
    for (let j = 0; j < arr.length; j++) {
      store[Math.abs(x[j])] += arr[j];
    }
    let [sum] = store;
    for (let jj = 1; jj < store.length; jj++) {
      sum += store[jj];
      if (sum > k * jj) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
