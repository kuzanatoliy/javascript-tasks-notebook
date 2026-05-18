module.exports = {
  getPositionValue: (position) => {
    let i = 1;
    while (i < position) {
      position -= i;
      i++;
    }
    return position;
  },
};
