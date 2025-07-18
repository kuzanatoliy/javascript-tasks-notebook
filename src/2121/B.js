module.exports = {
  isItPosibleToConstructString: (str) => {
    const set = new Set([str[0], str[str.length - 1]]);
    for (let j = 1; j < str.length - 1; j++) {
      if (set.has(str[j])) {
        return 'YES';
      }
      set.add(str[j]);
    }
    return 'NO';
  },
};
