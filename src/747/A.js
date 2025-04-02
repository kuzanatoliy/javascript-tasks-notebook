module.exports = {
  getPair: (num) => {
    let d = Math.floor(Math.sqrt(num));
    while (num % d > 0) {
      d--;
    }
    return [d, num / d];
  },
};
