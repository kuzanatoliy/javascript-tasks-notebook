module.exports = {
  getAmount: (a, b) => {
    let nb1 = 0;
    let nbm1 = 0;
    let resA = 0;
    let resB = 0;
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        resA += a[i];
      } else if (a[i] < b[i]) {
        resB += b[i];
      } else if (a[i] === -1) {
        nbm1++;
      } else if (a[i] === 1) {
        nb1++;
      }
    }

    const nb1ToGive = Math.min(nb1, Math.abs(resB - resA));
    if (resA < resB) {
      resA += nb1ToGive;
    } else {
      resB += nb1ToGive;
    }
    nb1 -= nb1ToGive;

    const nbm1ToGive = Math.min(nbm1, Math.abs(resB - resA));
    if (resA < resB) {
      resB -= nbm1ToGive;
    } else {
      resA -= nbm1ToGive;
    }
    nbm1 -= nbm1ToGive;

    let nbLeftOver = nb1 - nbm1;
    const nbLeftOverToShare =
      Math.sign(nbLeftOver) * Math.floor(Math.abs(nbLeftOver / 2));
    nbLeftOver = Math.sign(nbLeftOver) * (Math.abs(nbLeftOver) % 2);

    resA += nbLeftOverToShare;
    resB += nbLeftOverToShare;

    return Math.max(
      Math.min(resA + nbLeftOver, resB),
      Math.min(resA, resB + nbLeftOver)
    );
  },
};
