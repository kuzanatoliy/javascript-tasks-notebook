module.exports = {
  getPermutation: (num) => {
    const arr = [];
    let i = 2;
    for (; i <= num; i += 2) {
      arr.push(i);
    }
    arr.push(1);
    for (i = Math.floor((num + 1) / 2) * 2 - 1; i > 1; i -= 2) {
      arr.push(i);
    }
    return arr;
  },
};
