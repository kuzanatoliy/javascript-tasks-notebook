module.exports = {
  getCountOfOperations: (num) => {
    let j = 1;
    let op = 1;
    while (op < num) {
      j++;
      op = op * 2 + 2;
    }
    return j;
  },
};
