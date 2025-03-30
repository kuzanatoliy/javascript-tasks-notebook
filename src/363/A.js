module.exports = {
  getView: (num) => {
    const nums = num
      .toString()
      .split('')
      .map((item) => +item);
    const res = [];
    for (let j = nums.length - 1; j >= 0; j--) {
      const c = ['O', 'O', '|', 'O', 'O', 'O', 'O', 'O'];
      if (nums[j] >= 5) {
        c[0] = '-';
        nums[j] -= 5;
      } else {
        c[1] = '-';
      }
      c[3 + nums[j]] = '-';
      res.push(c.join(''));
    }
    return res;
  },
};
