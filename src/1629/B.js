module.exports = {
  isItPossibleToTurn: (l, r, k) => {
    if (l === r) {
      return l === 1 ? 'NO' : 'YES';
    }
    let odd = Math.floor((r - l + 1) / 2);
    if (l % 2 === r % 2 && r % 2 === 1) {
      odd++;
    }
    return odd <= k ? 'YES' : 'NO';
  },
};
