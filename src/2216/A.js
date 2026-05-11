module.exports = {
  getMap: (arrK, arr) => {
    const temp = arr
      .map((item, ind) => [item, ind + 1])
      .sort((a, b) => b[0] - a[0]);
    const res = [];
    for (let j = 0; j < temp.length; j++) {
      let [d] = temp[j];
      while (d <= arrK.length) {
        res.push(temp[j][1]);
        d++;
      }
    }
    return res;
  },
};
