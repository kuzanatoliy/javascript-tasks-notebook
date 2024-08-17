module.exports = {
  getMaxInt: (array) => {
    const store = [];
    for (let j = 1; j < array.length; j++) {
      store.push(Math.max(array[j], array[j - 1]) - 1);
    }
    return Math.min(...store);
  },
};
