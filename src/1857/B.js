module.exports = {
  transformNumber: (snum) => {
    let j = 0;
    while (snum[j] < '5' && j < snum.length) {
      j++;
    }
    if (j === snum.length) {
      return snum;
    }
    j--;
    while (j >= 0 && snum[j] === '4') {
      j--;
    }
    if (j === -1) {
      return 1 + new Array(snum.length).fill(0).join('');
    }
    const temp = snum.slice(0, j + 1);
    return (
      temp.slice(0, temp.length - 1) +
      (+temp[temp.length - 1] + 1) +
      new Array(snum.length - j - 1).fill(0).join('')
    );
  },
};
