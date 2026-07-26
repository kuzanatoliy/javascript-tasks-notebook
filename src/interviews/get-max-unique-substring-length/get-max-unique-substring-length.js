/* eslint-disable no-undefined */
module.exports = {
  getMaxUniqueSubStringLength: (str) => {
    const store = { [str[0]]: 0 };
    let res = 1;
    let curr = 1;
    for (let j = 1; j < str.length; j++) {
      const ind = store[str[j]];
      if (ind === undefined) {
        curr++;
      } else {
        curr = j - store[str[j]];
      }
      store[str[j]] = j;
      res = Math.max(res, curr);
    }
    return res;
  },
};
