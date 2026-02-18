module.exports = {
  transformNumber: (k, snum) => {
    if (snum.length === 1) {
      return k > 0 ? '0' : snum;
    }
    const ans = snum.split('');
    if (ans[0] !== '1' && k > 0) {
      ans[0] = '1';
      k--;
    }
    for (let j = 1; j < ans.length && k > 0; j++) {
      if (ans[j] !== '0') {
        ans[j] = '0';
        k--;
      }
    }
    return ans.join('');
  },
};
