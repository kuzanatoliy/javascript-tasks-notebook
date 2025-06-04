module.exports = {
  getPermutation: (num, k) => {
    const arr = [];
    let j = 0;
    while (j < k) {
      arr.push(j);
      j++;
    }
    num--;
    while (num >= k) {
      arr.push(num);
      num--;
    }
    return arr;
  },
};
