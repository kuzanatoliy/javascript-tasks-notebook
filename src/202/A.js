module.exports = {
  getSubStr: (str) => {
    const alp = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      alp[str[j].charCodeAt() - 97]++;
    }
    for (let jj = 25; jj >= 0; jj--) {
      if (alp[jj] > 0) {
        return new Array(alp[jj]).fill(String.fromCharCode(jj + 97)).join('');
      }
    }
    return '';
  },
};
