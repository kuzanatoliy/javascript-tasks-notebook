module.exports = {
  getFirstMoment: (map, arr) => {
    let min = 1000000000;
    for (let j = 1; j < arr.length; j++) {
      if (map[j] === 'L' && map[j - 1] === 'R') {
        min = Math.min((arr[j] - arr[j - 1]) / 2, min);
      }
    }
    return min === 1000000000 ? -1 : min;
  },
};
