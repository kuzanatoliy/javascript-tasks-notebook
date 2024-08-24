module.exports = {
  getCubs: (number, sum, r) => {
    number--;
    const l = sum - r;
    r -= number;
    let d = r % number;
    const min = Math.floor(r / number) + 1;
    const max = min + 1;
    const res = [l];
    while (d) {
      res.push(max);
      d--;
      number--;
    }
    while (number) {
      res.push(min);
      number--;
    }
    return res;
  },
};
