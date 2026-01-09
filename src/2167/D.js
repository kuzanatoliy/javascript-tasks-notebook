function gcd(a, b) {
  while (b !== 0n) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

// Predefined small primes (more than enough for G ≤ 1e18)
const primes = [
  2n,
  3n,
  5n,
  7n,
  11n,
  13n,
  17n,
  19n,
  23n,
  29n,
  31n,
  37n,
  41n,
  43n,
  47n,
  53n,
  59n,
  61n,
  67n,
  71n,
  73n,
  79n,
  83n,
  89n,
  97n,
  101n,
  103n,
  107n,
  109n,
  113n,
];

module.exports = {
  getResult: (arr) => {
    let G = 0n;
    for (let i = 0; i < arr.length; i++) {
      const val = BigInt(arr[i]);
      G = gcd(G, val);
    }

    let ans = -1n;
    for (const p of primes) {
      if (G % p !== 0n) {
        ans = p;
        break;
      }
    }

    return Number(ans);
  },
};
