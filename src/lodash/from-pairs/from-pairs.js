const fromPairs = (arr) => {
  const store = {};
  for (let i = 0; i < arr.length; i++) {
    // eslint-disable-next-line prefer-destructuring
    store[arr[i][0]] = arr[i][1];
  }
  return store;
};

module.exports = {
  fromPairs,
};
