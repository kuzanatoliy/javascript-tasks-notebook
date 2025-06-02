module.exports = {
  getCountOfOne: (snum) => {
    let c = 0;
    for (let j = 0; j < snum.length; j++) {
      c += snum[j] === '1';
    }
    return snum.length * c - 2 * c + snum.length;
  },
};
