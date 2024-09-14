module.exports = {
  getCountOfNumbers: (snum) => {
    const arr = snum.split('');
    let ans = 0;
    let res = 0;
    for (let j = 0; j < arr.length; j++) {
      ans = ans * 10 + +snum[j];
      res += Math.floor(ans / 2050);
      ans %= 2050;
    }
    return ans > 0 ? -1 : res;
  },
};
