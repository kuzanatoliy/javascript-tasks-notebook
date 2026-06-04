// Can be used array.prototype.flat instead of it

const flattenDeep = (arr, store = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenDeep(arr[i], store);
    } else {
      store.push(arr[i]);
    }
  }
  return store;
};

module.exports = {
  flattenDeep,
};
