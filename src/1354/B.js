/* eslint-disable guard-for-in */
module.exports = {
  getMinSubString: (str) => {
    let one = 0;
    let two = 0;
    let three = 0;
    let ans = 200005;
    let d = 0;
    let arr = [];
    for (const i in str) {
      if (str[i] === '1') {
        one = i;
      } else if (str[i] === '2') {
        two = i;
      } else {
        three = i;
      }

      if (one && two && three) {
        arr = [one, two, three];
        arr.sort((a, b) => a - b);
        d = arr[2] - arr[0] + 1;
        ans = Math.min(ans, d);
      }
    }
    return ans === 200005 ? 0 : ans;
  },
};
