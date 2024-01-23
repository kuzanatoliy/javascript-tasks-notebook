module.exports = {
  isItPossibleToShiftTheConveyor: (props, positions1, positions2) => {
    let max = 1000000000;
    let min = -10000000000;
    for (let j = 0; j < props[0]; j++) {
      min = Math.max(
        min,
        positions2[j] + props[2] - (positions1[j] + props[1])
      );
      max = Math.min(
        max,
        positions2[j] - props[2] - (positions1[j] - props[1])
      );
    }
    return min <= max ? 'YES' : 'NO';
  },
};
