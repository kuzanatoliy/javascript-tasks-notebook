module.exports = {
  getCountOfOperations: (arr, k) => {
    const store = {};
    for (let j = 0; j < arr.length; j++) {
      store[arr[j]] = (store[arr[j]] || 0) + 1;
    }
    const vals = Object.keys(store)
      .map((item) => store[item])
      .sort((a, b) => a - b);
    let jj = 0;
    while (jj < vals.length && k >= vals[jj]) {
      k -= vals[jj];
      jj++;
    }
    return vals.length - jj || 1;
  },
};
