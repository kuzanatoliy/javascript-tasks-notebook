module.exports = {
  findUniqueNumber: (arr) => {
    const store = {};
    for (let j = 0; j < arr.length; j++) {
      store[arr[j]] = (store[arr[j]] || 0) + 1;
    }
    const keys = Object.keys(store);
    for (let jj = 0; jj < keys.length; jj++) {
      if (store[keys[jj]] === 1) {
        return Number(keys[jj]);
      }
    }
    return -1;
  },
};
