module.exports = {
  getCountOfOperations: (arr) => {
    arr.sort((a, b) => b - a);
    if (arr[arr.length - 1] === 0) {
      const ind = arr.indexOf(0);
      return arr.length - (arr.length - ind);
    }
    const set = new Set(arr);
    return set.size === arr.length ? arr.length + 1 : arr.length;
  },
};
