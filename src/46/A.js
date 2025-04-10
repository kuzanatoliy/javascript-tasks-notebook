module.exports = {
  getOrder: (num) => {
    let fl = num - 1;
    let step = 2;
    let next = 1;
    const res = [];
    while (fl) {
      res.push(next + 1);
      next = (next + step) % num;
      step++;
      fl--;
    }
    return res;
  },
};
