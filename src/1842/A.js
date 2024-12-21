module.exports = {
  getWinner: (arrA, arrB) => {
    const sa = arrA.reduce((a, b) => a + b, 0);
    const sb = arrB.reduce((a, b) => a + b, 0);
    if (sa === sb) {
      return 'Draw';
    } else if (sa > sb) {
      return 'Tsondu';
    } else {
      return 'Tenzing';
    }
  },
};
