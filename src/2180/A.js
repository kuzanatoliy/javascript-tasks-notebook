module.exports = {
  getMaxCost: (l, a, b) => {
    const temp = [];
    let d = a;
    while (d !== temp[0]) {
      temp.push(d);
      d = (d + b) % l;
    }
    return Math.max(...temp);
  },
};
