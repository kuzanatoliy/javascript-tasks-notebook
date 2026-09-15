module.exports = {
  buildOrder: (num) => {
    const res = [1];
    let prev = 1;
    for (let j = 1; j < num; j++) {
      const d = j * 2 + 1;
      res.push(prev * d);
      prev = d;
    }
    return res;
  },
};
