module.exports = {
  checkLuckyNumber: (numberStr) => {
    let num = numberStr;
    let count = 0;
    let i = 0;
    for (i = 0; i < num.length; i++) {
      if (num[i] === '4' || num[i] === '7') {
        count++;
      }
    }
    num = count.toString();
    for (i = 0; i < num.length; i++) {
      if (num[i] === '4' || num[i] === '7') {
        continue;
      } else {
        break;
      }
    }
    return i === num.length ? 'YES' : 'NO';
  },
};
