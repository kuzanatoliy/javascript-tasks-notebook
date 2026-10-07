module.exports = {
  getWinner: (arrA, arrB) => {
    let axor = 0;
    let bxor = 0;

    for (let i = 0; i < arrA.length; i++) {
      axor ^= arrA[i];
      bxor ^= arrB[i];
    }

    if (axor === bxor) {
      return 'Tie';
    }

    let last = -1;
    for (let ii = arrA.length - 1; ii >= 0; ii--) {
      if (arrA[ii] !== arrB[ii]) {
        last = ii;
        break;
      }
    }
    return (last + 1) % 2 === 1 ? 'Ajisai' : 'Mai';
  },
};
