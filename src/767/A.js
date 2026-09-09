module.exports = {
  getOrder: (arr) => {
    let store = [];
    const res = Array.from({ length: arr.length }, () => []);
    const temp = arr
      .map((item, ind) => [item, ind])
      .sort((a, b) => b[0] - a[0]);
    for (let j = 0; j < arr.length - 1; j++) {
      store.push(temp[j]);
      if (store[0][1] <= temp[j + 1][1]) {
        res[store[0][1]] = store.map((item) => item[0]);
        store = [];
      }
    }
    store.push(temp[arr.length - 1]);
    res[store[0][1]] = store.map((item) => item[0]);
    return res;
  },
};
