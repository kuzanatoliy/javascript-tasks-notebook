module.exports = {
  isItPossibleToBuild: (num, m, p, q) => {
    let ans = true;
    if (num % p === 0) {
      ans = Math.floor(num / p) * q === m;
    }
    return ans ? 'YES' : 'NO';
  },
};
