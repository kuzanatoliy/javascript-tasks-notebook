module.exports = {
  isItPossibleToReach: (points) => {
    let xl = false;
    let xr = false;
    let yl = false;
    let yr = false;
    for (let j = 0; j < points.length; j++) {
      if (points[j][0] < 0) {
        xl = true;
      } else if (points[j][0] > 0) {
        xr = true;
      }
      if (points[j][1] < 0) {
        yl = true;
      } else if (points[j][1] > 0) {
        yr = true;
      }
    }
    return xl && xr && yl && yr ? 'NO' : 'YES';
  },
};
