module.exports = {
  getOperations: (k, x) => {
    const targetA = 1n << k;
    const total = targetA * 2n;

    let a = x;
    let b = total - x;
    const ops = [];

    while (a !== targetA) {
      if (a < b) {
        ops.push(1);
        a *= 2n;
        b -= a / 2n;
      } else {
        ops.push(2);
        b *= 2n;
        a -= b / 2n;
      }
    }

    return ops.reverse();
  },
};
