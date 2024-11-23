module.exports = {
  getPermutationChain: (num) => {
    const arr = new Array(num).fill(0).map((_, ind) => ind + 1);
    const res = [[...arr]];
    for (let j = 1; j < num; j++) {
      arr[j - 1] = arr[j];
      arr[j] = 1;
      res.push([...arr]);
    }
    return res;
  },
};
