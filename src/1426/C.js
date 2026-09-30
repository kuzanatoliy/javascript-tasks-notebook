module.exports = {
  getMinOperationsCount: (num) => {
    let curr = num - 1;
    for (let j = 1; j < num; j++) {
      const d = j - 1 + Math.ceil((num - j) / j);
      if (curr < d) {
        break;
      }
      curr = d;
    }
    return curr;
  },
};
