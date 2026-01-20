/* eslint-disable complexity */
module.exports = {
  isItPossibleToBuildPalindrome: (r, g, b, w) => {
    const dr = r % 2;
    const dg = g % 2;
    const db = b % 2;
    const dw = w % 2;
    return (dr && dg && db && dw) ||
      (!dr && !dg && !db && !dw) ||
      dr + dg + db + dw === 1 ||
      (!dw && dr && dg && db) ||
      (dw && dr + dg + db === 2 && r && b && g)
      ? 'YES'
      : 'NO';
  },
};
