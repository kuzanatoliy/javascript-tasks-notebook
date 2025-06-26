module.exports = {
  getOrderNumber: (a, b, num) => {
    const d = num % 3;
    switch (d) {
      case 0:
        return a;
      case 1:
        return b;
      case 2:
        return a ^ b;
    }
    return 0;
  },
};
