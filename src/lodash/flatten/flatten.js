// Can be used array.prototype.flat instead of it

const flatten = (arr) => {
  const store = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        store.push(arr[i][j]);
      }
    } else {
      store.push(arr[i]);
    }
  }
  return store;
};

module.exports = {
  flatten,
};
