module.exports = {
  getMaxHealth: (arr) => {
    const store = new Array(1001).fill(0);
    let max = 0;
    for (let j = 0; j < arr.length; j++) {
      store[arr[j]]++;
      if (store[max] < store[arr[j]]) {
        max = arr[j];
      }
    }
    const bound = arr.length - store[max] + 2;
    let sum = 0;
    for (let jj = 1; jj < store.length; jj++) {
      sum += jj * Math.min(store[jj], bound);
    }
    return sum;
  },
};
