module.exports = {
  getMinCost: (str) => {
    const arr = str.split('');
    const ss = [];
    let c = 0;
    let ans = 0;
    for (let i = 0; i < str.length; i++) {
      if (arr[i] === '_') {
        if (c === 0) {
          arr[i] = '(';
          ss.push(i);
          c++;
        } else {
          arr[i] = ')';
          c--;
          ans += i - ss.pop();
        }
      } else if (arr[i] === '(') {
        ss.push(i);
        c++;
      } else {
        ans += i - ss.pop();
        c--;
      }
    }
    return ans;
  },
};
