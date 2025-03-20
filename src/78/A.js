/* eslint-disable complexity */
module.exports = {
  isHaiku: (str1, str2, str3) => {
    let c1 = 0;
    for (let j = 0; j < str1.length; j++) {
      c1 +=
        str1[j] === 'a' ||
        str1[j] === 'e' ||
        str1[j] === 'i' ||
        str1[j] === 'o' ||
        str1[j] === 'u';
    }
    let c2 = 0;
    for (let jj = 0; jj < str2.length; jj++) {
      c2 +=
        str2[jj] === 'a' ||
        str2[jj] === 'e' ||
        str2[jj] === 'i' ||
        str2[jj] === 'o' ||
        str2[jj] === 'u';
    }
    let c3 = 0;
    for (let jjj = 0; jjj < str3.length; jjj++) {
      c3 +=
        str3[jjj] === 'a' ||
        str3[jjj] === 'e' ||
        str3[jjj] === 'i' ||
        str3[jjj] === 'o' ||
        str3[jjj] === 'u';
    }
    return c1 === 5 && c2 === 7 && c3 === 5 ? 'YES' : 'NO';
  },
};
