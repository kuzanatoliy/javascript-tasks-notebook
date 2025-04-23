module.exports = {
  isItPossibleToGetX: (num, k, x) => {
    const sl = (k * (k + 1)) / 2;
    const sr = (num * (num + 1)) / 2 - ((num - k) * (num - k + 1)) / 2;
    return x >= sl && x <= sr ? 'YES' : 'NO';
  },
};
