module.exports = {
  getHappyNumber: (snum) => {
    let c4 = 0;
    let c7 = 0;
    for (let j = 0; j < snum.length; j++) {
      c4 += snum[j] === '4';
      c7 += snum[j] === '7';
    }
    if (!c4 && !c7) {
      return -1;
    }
    return c4 < c7 ? '7' : '4';
  },
};
