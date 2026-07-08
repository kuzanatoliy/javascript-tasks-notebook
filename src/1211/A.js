module.exports = {
  getContest: (arr) => {
    const temp = arr
      .map((item, ind) => [item, ind])
      .sort((a, b) => a[0] - b[0]);
    const res = [temp[0][1] + 1];
    for (let j = 1; j < temp.length && res.length < 3; j++) {
      if (temp[j][0] !== temp[j - 1][0]) {
        res.push(temp[j][1] + 1);
      }
    }
    return res.length === 3 ? res : [-1, -1, -1];
  },
};
