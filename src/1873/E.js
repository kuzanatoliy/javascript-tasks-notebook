module.exports = {
  getHeight: (x, arr) => {
    const temp = arr.sort((a, b) => a - b);
    let [h] = temp;
    for (let j = 1; j < temp.length && h === temp[j - 1]; j++) {
      const d = temp[j] - temp[j - 1];
      const dd = d * j;
      if (x < dd) {
        h += Math.floor(x / j);
        x = 0;
      } else {
        h = temp[j];
        x -= dd;
      }
    }
    h += Math.floor(x / temp.length);
    return h;
  },
};
