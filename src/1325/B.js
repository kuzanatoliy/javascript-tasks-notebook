module.exports = {
  getLength: (array) => {
    const set = new Set();
    for (let j = 0; j < array.length; j++) {
      set.add(array[j]);
    }
    return set.size;
  },
};
