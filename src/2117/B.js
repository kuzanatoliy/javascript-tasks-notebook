module.exports = {
  getPermutation: (num) => {
    const arr = [1];
    for (let j = 0; j < num - 1; j++) {
      arr.push(num - j);
    }
    return arr;
  },
};
