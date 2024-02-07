module.exports = {
  isSquareString: (string) => {
    if (string.length % 2 > 0) {
      return 'NO';
    }

    return string.slice(0, string.length / 2) ===
      string.slice(string.length / 2, string.length)
      ? 'YES'
      : 'NO';
  },
};
