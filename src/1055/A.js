module.exports = {
  isItPossibleToReach: (way1, way2, s) => {
    s--;
    if (way1[0] === 0) {
      return 'NO';
    }
    if (way1[s] === 1) {
      return 'YES';
    } else if (way1[s] === 0 && way2[s] === 1) {
      for (let j = s + 1; j < way1.length; j++) {
        if (way1[j] === 1 && way2[j] === 1) {
          return 'YES';
        }
      }
    }
    return 'NO';
  },
};
