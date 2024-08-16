module.exports = {
  isItPossibleToTakeShower: (duration, limit, intervals) => {
    if (intervals[0][0] >= duration) {
      return 'YES';
    }
    for (let j = 1; j < intervals.length; j++) {
      if (intervals[j][0] - intervals[j - 1][1] >= duration) {
        return 'YES';
      }
    }
    if (limit - intervals[intervals.length - 1][1] >= duration) {
      return 'YES';
    }
    return 'NO';
  },
};
