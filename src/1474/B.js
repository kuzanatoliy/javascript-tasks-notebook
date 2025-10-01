function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function findNextPrime(n, d) {
  for (let i = n + d; ; i++) {
    if (isPrime(i)) {
      return i;
    }
  }
}

module.exports = {
  getNumber: (d) => {
    const temp = findNextPrime(1, d);
    return temp * findNextPrime(temp, d);
  },
};
