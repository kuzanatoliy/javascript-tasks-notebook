module.exports = {
  transform: (snum) => {
    const arr = snum.split('');
    const ind = arr.indexOf('0');
    return ind < 0
      ? snum.slice(0, snum.length - 1)
      : snum.slice(0, ind) + snum.slice(ind + 1);
  },
};
