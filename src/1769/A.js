module.exports = {
  getNextPositions: (arr) => {
    const res = [arr[0] - 1];
    for (let j = 1; j < arr.length; j++) {
      res.push(Math.max(res[j - 1] + 1, arr[j] - j - 1));
    }
    return res;
  },
};
