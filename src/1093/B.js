module.exports = {
  getGoodStr: (str) => {
    const arr = str.split('');
    if (new Set(arr).size === 1) {
      return -1;
    }
    arr.sort();
    return arr.join('');
  },
};
