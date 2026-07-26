module.exports = {
  multyFilter: (arr, fArr) => {
    const store = new Set(fArr);
    return arr.filter((item) => !store.has(item));
  },
};
