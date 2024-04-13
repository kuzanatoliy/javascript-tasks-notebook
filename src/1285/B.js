module.exports = {
  isSumGreaterThanSubSum: (array) => {
    let c = 0;
    let s = 0;
    let jj = 0;
    let j = array.length - 1;
    let m = 1;
    while (jj < array.length) {
      c += array[jj];
      s += array[j];
      if (c < 1 || s < 1) {
        m = 0;
        break;
      }
      jj++;
      j--;
    }
    return m ? 'YES' : 'NO';
  },
};
