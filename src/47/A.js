module.exports = {
  isTriangularNumber: (num) => {
    let res = 1;
    let j = 1;
    while (res < num) {
      j++;
      res += j;
    }
    return res === num ? 'YES' : 'NO';
  },
};
