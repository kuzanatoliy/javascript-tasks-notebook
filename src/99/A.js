module.exports = {
  getIntNumber: (snum) => {
    const parts = snum.split('.');
    if (parts[0][parts[0].length - 1] === '9') {
      return 'GOTO Vasilisa.';
    }
    const ans = parts[0].split('');
    const ans2 = parts[1]
      .split('')
      .map((item) => +item)
      .reverse();
    for (let j = 1; j < ans2.length; j++) {
      ans2[j] += Math.round(ans2[j] / 10);
    }
    ans[ans.length - 1] =
      +ans[ans.length - 1] + Math.round(parseFloat(ans2[ans2.length - 1] / 10));
    return ans.join('');
  },
};
