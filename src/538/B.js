module.exports = {
  getBinaryNumbers: (number) => {
    const arr = number
      .toString()
      .split('')
      .map((item) => +item);
    const temp = [];
    const limit = Math.max(...arr);
    for (let j = 0, k = 0; j < limit; j++) {
      while (arr[k] === 0) {
        k++;
      }
      let str = '';
      for (let jj = k; jj < arr.length; jj++) {
        if (arr[jj] > 0) {
          str += '1';
          arr[jj]--;
          continue;
        }
        str += '0';
      }
      temp.push(str);
    }
    return temp;
  },
};
