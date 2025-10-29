module.exports = {
  getWay: (num) => {
    let curr = num;
    let next = num - 1;
    const res = [];
    while (next) {
      res.push([curr, next]);
      curr = Math.ceil((curr + next) / 2);
      next--;
    }
    return res;
  },
};
