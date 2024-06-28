module.exports = {
  getInteger: (number) => {
    let ans = number;
    number >>= 1n;
    for (let j = 1n; number; j++, number >>= 1n) {
      ans += ((number + 1n) >> 1n) * j;
    }
    return ans;
  },
};
