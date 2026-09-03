module.exports = {
  pullAllBy: (arr, values, key) => {
    const set = new Set(values.map((item) => item[key]));
    return arr.filter((item) => !set.has(item[key]));
  },
};
