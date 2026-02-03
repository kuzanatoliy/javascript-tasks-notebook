module.exports = {
  isItPossilbeToTransform: (x, y) => {
    switch (x) {
      case 1:
        return y === 1 ? 'YES' : 'NO';
      case 2:
      case 3:
        return y >= 1 && y <= 3 ? 'YES' : 'NO';
      default:
        return 'YES';
    }
  },
};
