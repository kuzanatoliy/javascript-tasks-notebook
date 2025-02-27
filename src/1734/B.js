module.exports = {
  getLighters: (num) => {
    const res = [];
    for (let j = 0; j < num; j++) {
      const temp = new Array(j + 1).fill(0);
      temp[0] = 1;
      temp[j] = 1;
      res.push(temp);
    }
    return res;
  },
};
