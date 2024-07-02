const gcd = (a, b) => {
  while (a > 0) {
    const temp = a;
    a = b % a;
    b = temp;
  }
  return b;
};

module.exports = {
  checkBlack: (w, b) => (gcd(w, b) === 1 ? 'Finite' : 'Infinite'),
};
