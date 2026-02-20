/* eslint-disable max-depth */
module.exports = {
  getMaxValue: (bstr1, bstr2) => {
    const arr1 = bstr1.split('').map((item) => +item);
    const arr2 = bstr2.split('').map((item) => +item);
    let ans = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        ans += 2;
      } else if (arr1[i] === 0) {
        if (i + 1 < bstr1.length) {
          if (arr1[i + 1] === 1 && arr2[i + 1] === 1) {
            ans += 2;
            i++;
          } else {
            ans++;
          }
        } else {
          ans++;
        }
      } else if (i + 1 < bstr1.length) {
        if (arr1[i + 1] === 0 && arr2[i + 1] === 0) {
          ans += 2;
          i++;
        }
      }
    }
    return ans;
  },
};
