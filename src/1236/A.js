module.exports = {
  getCountOfStones: (a, b, c) => {
    let temp = Math.floor(c / 2);
    const count = Math.min(b, temp);
    b -= count;
    temp = Math.floor(b / 2);
    return (count + Math.min(a, temp)) * 3;
  },
};
