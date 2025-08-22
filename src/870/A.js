module.exports = {
  getPrettyInt: (arrA, arrB) => {
    const a = Math.min(...arrA);
    const b = Math.min(...arrB);
    if (a === b) {
      return a.toString();
    } else if (a < b) {
      return `${a}${b}`;
    } else {
      return `${b}${a}`;
    }
  },
};
