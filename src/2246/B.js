module.exports = {
  buildArray: (num) => {
    if (num === 2) {
      return [-1];
    }
    if (num === 1) {
      return [1];
    }
    const res = [1, 2];
    let next = 3;
    for (let j = 2; j < num; j++) {
      res.push(next);
      next += res[res.length - 1];
    }
    return res;
  },
};
