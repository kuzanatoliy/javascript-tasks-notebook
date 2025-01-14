module.exports = {
  createArray: (num) => {
    const res = [];
    num += 2;
    for (let j = 2; j < num; j++) {
      res.push(j);
    }
    return res;
  },
};
