module.exports = {
  getOperationCount: (str) => {
    const num = str.length;
    let pref = 0;
    let suf = 0;

    for (let j = 0; j < num; j++) {
      suf += str[j] === '1' || str[j] === '3';
    }

    let ans = suf;
    for (let jj = 0; jj < num; jj++) {
      pref += str[jj] === '2';
      suf -= str[jj] === '1' || str[jj] === '3';
      ans = Math.max(ans, pref + suf);
    }

    return num - ans;
  },
};
