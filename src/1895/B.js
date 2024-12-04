module.exports = {
  getPoints: (arr) => {
    arr.sort((a, b) => a - b);
    const n = arr.length / 2;
    const points = [];
    for (let j = 0; j < n; j++) {
      points.push([arr[j], arr[j + n]]);
    }
    return points;
  },
};
