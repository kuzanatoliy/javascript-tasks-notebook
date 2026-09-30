module.exports = {
  isItPossibleToReorder: (strs) => {
    strs.sort((a, b) => a.length - b.length);
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].indexOf(strs[j - 1]) === -1) {
        return ['NO'];
      }
    }
    return ['YES', strs];
  },
};
