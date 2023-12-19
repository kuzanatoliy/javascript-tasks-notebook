module.exports = {
  getFraction: (y, w) => {
    const max = Math.max(y, w);
    switch (max) {
      case 1:
        return '1/1';
      case 2:
        return '5/6';
      case 3:
        return '2/3';
      case 4:
        return '1/2';
      case 5:
        return '1/3';
      default:
        return '1/6';
    }
  },
};
