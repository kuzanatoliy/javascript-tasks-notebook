module.exports = {
  isItPossibleToOptimize: (num, t, k, d) =>
    Math.ceil(num / k) * t <= (Math.floor(d / t) + 1) * t ? 'NO' : 'YES',
};
