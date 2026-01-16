module.exports = {
  getDesk: (r, c) => {
    const desk = new Array(r);
    for (let j = 0; j < r; j++) {
      desk[j] = new Array(c).fill('B');
    }
    desk[0][0] = 'W';
    return desk;
  },
};
