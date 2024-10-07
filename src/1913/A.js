module.exports = {
  getScores: (nstr) => {
    let a = '';

    for (let j = 0; j < nstr.length; j++) {
      a += nstr[j];
      const b = nstr.slice(j + 1);

      if (b.charAt(0) !== '0' && Number(b) > Number(a)) {
        return [a, b];
      }
    }
    return [-1];
  },
};
