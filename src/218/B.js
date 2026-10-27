module.exports = {
  isOneRace: (num, arr) => {
    arr.sort((a, b) => a - b);
    const store = [0];
    let j = 0;
    let min = 0;
    let d = num;
    while (d > 0 && j < arr.length) {
      const t = arr[j];
      while (store.length <= t) {
        store.push(store[store.length - 1] + store.length);
      }
      if (t <= d) {
        min += store[t];
      } else {
        min += store[t] - store[t - d];
      }
      d -= t;
      j++;
    }
    d = num;
    let max = 0;
    for (let jj = arr.length - 1; d > 0 && jj >= 0; jj--) {
      while (d > 0 && arr[jj] && arr[jj] !== arr[jj - 1]) {
        max += arr[jj] * Math.min(d, arr.length - jj);
        d -= arr.length - jj;
        arr[jj]--;
      }
    }
    return [max, min];
  },
};
