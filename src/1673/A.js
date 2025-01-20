module.exports = {
  getWinner: (str) => {
    const arr = str.split('').map((item) => item.charCodeAt() - 96);
    let sum = arr.reduce((a, b) => a + b, 0);
    if (str.length === 1) {
      return `Bob ${sum}`;
    }
    if (str.length % 2 === 1) {
      sum -= 2 * Math.min(arr[0], arr[arr.length - 1]);
    }
    return `Alice ${sum}`;
  },
};
