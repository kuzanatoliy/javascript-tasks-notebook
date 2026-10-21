module.exports = {
  getItemsCount: (k, x, arr) => {
    const n = BigInt(arr.length);
    let i = arr.length - 1;
    let sum = 0n;
    let total = n * k;

    for (; i >= 0; i--) {
      sum += arr[i];
      if (sum >= x) {
        break;
      }
    }

    if (sum >= x) {
      return total - (n - BigInt(i) - 1n);
    }

    if (k === 1n) {
      return 0n;
    }

    total -= (x / sum) * n - 1n;
    sum *= x / sum;

    if (total <= 0n) {
      return 0n;
    }

    i = Number(n) - 1;

    for (; i >= 0; i--) {
      if (sum >= x) {
        return total < 0n ? 0n : total;
      }
      total--;
      sum += arr[i];
    }

    if (sum < x || total < 1n) {
      return 0;
    }
    return total;
  },
};
