module.exports = {
  getResultStringLength: (strA, strB) => {
    let ans = 0;
    for (let i = 0; i < strB.length; ++i) {
      let k = 0;
      for (let j = 0; j < strA.length && i + k < strB.length; ++j) {
        if (strB[i + k] === strA[j]) {
          ++k;
        }
      }
      ans = Math.max(ans, k);
    }

    return strA.length + strB.length - ans;
  },
};
