module.exports = {
  getMinNumber: (num) => {
    const factors = [];
    for (let i = 2; i * i <= num; i++) {
      while (num % i === 0) {
        if (!factors.includes(i)) {
          factors.push(i);
        }
        num /= i;
      }
    }
    if (num > 1) {
      factors.push(num);
    }
    return factors.reduce((a, b) => a * b);
  },
};
