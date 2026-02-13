module.exports = {
  getBagsNumbers: (num) => {
    let l = 1;
    let r = num * num;
    const res = [];
    for (let j = 0; j < num; j++) {
      const next = [];
      for (let jj = 0; jj < num / 2; jj++) {
        next.push(l);
        l++;
        next.push(r);
        r--;
      }
      res.push(next);
    }
    return res;
  },
};
