module.exports = {
  getMaxStrength: (str1, str2) => {
    str1 =
      Array(str2.length - str1.length)
        .fill(0)
        .join('') + str1;
    let ans = 0;
    for (let j = 0; j < str1.length; j++) {
      if (+str2[j] > +str1[j]) {
        ans += +str2[j] - +str1[j];
        ans += 9 * (str1.length - j - 1);
        break;
      }
    }
    return ans;
  },
};
