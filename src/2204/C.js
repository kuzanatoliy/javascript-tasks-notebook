module.exports = {
  getCountOfLitersOfWater: (a, b, c, m) => {
    const gcd = (x, y) => {
      while (y !== 0n) {
        const z = x % y;
        x = y;
        y = z;
      }
      return x;
    };
    const lcm = (x, y) => (x / gcd(x, y)) * y;
    const abv = lcm(a, b);
    const acv = lcm(a, c);
    const bcv = lcm(b, c);
    const abcv = lcm(abv, c);

    const A = m / a;
    const B = m / b;
    const C = m / c;
    const AB = m / abv;
    const AC = m / acv;
    const BC = m / bcv;
    const ABC = m / abcv;

    const x = 6n * A - 3n * AB - 3n * AC + 2n * ABC;
    const y = 6n * B - 3n * AB - 3n * BC + 2n * ABC;
    const z = 6n * C - 3n * AC - 3n * BC + 2n * ABC;

    return [x, y, z];
  },
};
