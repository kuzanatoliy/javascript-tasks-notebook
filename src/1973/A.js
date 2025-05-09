module.exports = {
  getCountOfDraws: (p1, p2, p3) => {
    const sum = p1 + p2 + p3;
    if (sum % 2 === 1) {
      return -1;
    }
    const arr = [p1, p2, p3].sort((a, b) => a - b);
    return arr[0] + arr[1] > arr[2] ? sum / 2 : arr[0] + arr[1];
  },
};
