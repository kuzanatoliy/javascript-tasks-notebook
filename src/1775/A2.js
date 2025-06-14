/* eslint-disable prefer-destructuring */
module.exports = {
  getSubstrings: (str) => {
    const aStr = str[0];
    let secondInd = 2;
    let bStr = str.substring(1, secondInd);
    let cStr = str.substring(secondInd);
    if (aStr === 'a' && bStr === 'b') {
      secondInd +=
        cStr.indexOf('a') !== -1
          ? cStr.indexOf('a')
          : Math.max(0, cStr.length - 1);
      bStr = str.substring(1, secondInd);
      cStr = str.substring(secondInd);
    }
    return [aStr, bStr, cStr];
  },
};
