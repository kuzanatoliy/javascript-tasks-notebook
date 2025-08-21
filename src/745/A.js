module.exports = {
  getCountOfStrings: (str) => {
    const set = new Set([str]);
    for (let j = 1; j < str.length; j++) {
      set.add(`${str.slice(str.length - j)}${str.slice(0, str.length - j)}`);
    }
    return set.size;
  },
};
