module.exports = {
  getHand: (dor, rail) => {
    if (dor === 'front') {
      return rail === 1 ? 'L' : 'R';
    } else {
      return rail === 1 ? 'R' : 'L';
    }
  },
};
