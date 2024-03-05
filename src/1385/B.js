module.exports = {
  restorePermutation: (array) => {
    const set = new Set();
    const res = [];
    for (let j = 0; j < array.length; j++) {
      if (!set.has(array[j])) {
        res.push(array[j]);
        set.add(array[j]);
      }
    }
    return res;
  },
};
