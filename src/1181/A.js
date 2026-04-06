module.exports = {
  getResult: (c1, c2, price) => {
    let res = Math.floor(c1 / price) + Math.floor(c2 / price);
    const d1 = c1 % price;
    const d2 = c2 % price;
    let tr = 0;
    if (d1 + d2 >= price) {
      res++;
      tr = price - (d1 > d2 ? d1 : d2);
    }
    return [res, tr];
  },
};
