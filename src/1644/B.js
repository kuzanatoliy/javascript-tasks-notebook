module.exports = {
  getPermutations: (num) => {
    const arr = new Array(num).fill(0).map((_, ind) => num - ind);
    const res = [[...arr], [1, ...arr.slice(0, num - 1)]];
    for (let j = 2; j < num; j++) {
      res.push([...res[j - 1]]);
      const [temp] = res[j];
      res[j][0] = res[j][res[j].length - 1 - j + 2];
      res[j][res[j].length - 1 - j + 2] = temp;
    }
    return res;
  },
};
