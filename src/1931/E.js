module.exports = {
  getWinners: (array, m) => {
    const arr = array
      .map((item) => {
        const temp = item.toString().split('').reverse();
        let count = 0;
        while (temp[count] === '0') {
          count++;
        }
        return [temp.length, count];
      })
      .sort((a, b) => b[1] - a[1]);
    let l = 0;
    for (let j = 0; j < arr.length; j += 2) {
      l += arr[j][0] - arr[j][1];
    }
    for (let jj = 1; jj < arr.length; jj += 2) {
      l += arr[jj][0];
    }
    return l <= m ? 'Anna' : 'Sasha';
  },
};
