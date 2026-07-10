module.exports = {
  getCountOfUniqueSubStrings: (str) => {
    let res = 0;
    const set = new Set();
    for (let j = 0; j < str.length; j++) {
      set.add(str[j]);
      res += set.size;
    }
    return res;
  },
};
