// Can be used array.prototype.flat instead of it

const flattenDepth = (arr, level, store = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      if (level > 1) {
        flattenDepth(arr[i], level - 1, store);
      } else {
        // eslint-disable-next-line max-depth
        for (let j = 0; j < arr[i].length; j++) {
          store.push(arr[i][j]);
        }
      }
    } else {
      store.push(arr[i]);
    }
  }
  return store;
};

module.exports = {
  flattenDepth,
};
