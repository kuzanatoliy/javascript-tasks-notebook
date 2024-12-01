module.exports = {
  getTerm: (str) => {
    const arr = str.split('A');
    if (arr.length === 1) {
      return 0;
    }
    return Math.max(
      ...str
        .split('A')
        .slice(1)
        .map((item) => item.length)
    );
  },
};
