module.exports = {
  getLength: (num) => {
    const s = Math.sqrt(num);
    return 2 * (Math.round(s) + Math.ceil(s));
  },
};
