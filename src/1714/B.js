module.exports = {
  getPrefixLength: (array) => {
    const set = new Set();
    for (let j = array.length - 1; j >= 0; j--) {
      if (set.has(array[j])) {
        return array.length - set.size;
      }
      set.add(array[j]);
    }
    return 0;
  },
};
