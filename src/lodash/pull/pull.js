module.exports = {
  pull: (arr, ...values) => {
    const set = new Set(values);
    return arr.filter((item) => !set.has(item));
  },
};
