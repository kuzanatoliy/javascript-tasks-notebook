/* eslint-disable prefer-destructuring */
function gcd(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }

  while (a) {
    const r = b % a;
    b = a;
    a = r;
  }
  return b;
}

module.exports = {
  getMinNumberOfPriceTags: (candies) => {
    let i = 0;
    let k = 0;
    while (i < candies.length) {
      let g = candies[i][0] * candies[i][1];
      let l = candies[i][1];
      let j = i;
      while (j + 1 < candies.length) {
        const [a, b] = candies[j + 1];
        g = gcd(g, a * b);
        l *= b / gcd(l, b);
        if (!(g % l)) {
          j++;
        } else {
          break;
        }
      }
      k++;
      i = j + 1;
    }
    return k;
  },
};
