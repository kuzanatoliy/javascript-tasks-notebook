module.exports = {
  restore: (arr) => {
    const store = [1];
    const res = [];
    for (let j = 0; j < arr.length; j++) {
      if (!store[arr[j]]) {
        for (let jj = store.length; jj <= arr[j]; jj++) {
          store.push((store[jj - 1] * 2) % 1000000007);
        }
      }
      res.push(store[arr[j]]);
    }
    return res;
  },
};
