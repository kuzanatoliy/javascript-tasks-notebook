module.exports = {
  getCountOfVariants: (str, rep) => {
    if (rep === 'a') {
      return 1;
    } else if (rep.indexOf('a') > -1) {
      return -1;
    } else {
      return 2 ** str.length;
    }
  },
};
