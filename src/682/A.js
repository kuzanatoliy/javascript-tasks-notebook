module.exports = {
  getPairsCount: (a, b) => {
    const mapA = [0, 0, 0, 0, 0];
    const mapB = [0, 0, 0, 0, 0];
    for (let j = 0; j < 5; j++) {
      mapA[j] = Math.floor((a - j - 1) / 5) + 1;
      mapB[j] = Math.floor((b - j - 1) / 5) + 1;
    }
    let sum = 0;
    for (let jj = 0; jj < 4; jj++) {
      sum += mapA[jj] * mapB[3 - jj];
    }
    return sum + mapA[4] * mapB[4];
  },
};
