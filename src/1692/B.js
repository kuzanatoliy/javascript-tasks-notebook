module.exports = {
  getLength: (array) => {
    const set = new Set(array);
    return set.size - ((array.length - set.size) % 2);
  },
};
