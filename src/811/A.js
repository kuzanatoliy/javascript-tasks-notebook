module.exports = {
  getLoser: (a, b) => {
    let step = 1;
    while (a >= 0 && b >= 0) {
      a -= step;
      step++;
      b -= step;
      step++;
    }
    return a < 0 ? 'Vladik' : 'Valera';
  },
};
