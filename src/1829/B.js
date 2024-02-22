module.exports = {
  getLongestBlankLength: (array) => {
    let l = 0;
    let ml = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === 1) {
        l = 0;
        continue;
      }
      l++;
      if (l > ml) {
        ml = l;
      }
    }
    return ml;
  },
};
