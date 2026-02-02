module.exports = {
  getMinNumber: (num) => {
    let ans = '';
    const cnt = Math.floor((num + 3) / 4);
    for (let j = 0; j < num - cnt; j++) {
      ans += '9';
    }
    for (let jj = 0; jj < cnt; jj++) {
      ans += '8';
    }
    return ans;
  },
};
