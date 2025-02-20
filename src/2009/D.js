module.exports = {
  getPoints: (points) => {
    const p = [
      new Array(points.length + 1).fill(0),
      new Array(points.length + 1).fill(0),
    ];
    for (let j = 0; j < points.length; j++) {
      p[points[j][1]][points[j][0]] = 1;
    }
    let count = 0;
    for (let jj = 0; jj < p[0].length; jj++) {
      if (p[0][jj] === 1 && p[1][jj] === 1) {
        count += points.length - 2;
      }
    }
    for (let jjj = 2; jjj < p[0].length; jjj++) {
      if (p[0][jjj - 2] === 1 && p[1][jjj - 1] === 1 && p[0][jjj] === 1) {
        count++;
      }
      if (p[1][jjj - 2] === 1 && p[0][jjj - 1] === 1 && p[1][jjj] === 1) {
        count++;
      }
    }
    return count;
  },
};
