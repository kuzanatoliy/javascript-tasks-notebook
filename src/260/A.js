module.exports = {
  getNumber: (a, b, num) => {
    const sa = a.toString();
    for (let j = 0; j < 10; j++) {
      if (Number(sa + j) % b === 0) {
        return sa + j + new Array(num - 1).fill(0).join('');
      }
    }
    return -1;
  },
};
