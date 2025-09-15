module.exports = {
  transformString: (str) => {
    const temp = str.split('');
    let count = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === 'x') {
        count++;
      }
    }
    count -= str.length / 2;
    const res = [Math.abs(count)];
    if (count > 0) {
      for (let jj = 0; count && jj < temp.length; jj++) {
        if (temp[jj] === 'x') {
          temp[jj] = 'X';
          count--;
        }
      }
    } else {
      for (let jjj = 0; count < 0 && jjj < temp.length; jjj++) {
        if (temp[jjj] === 'X') {
          temp[jjj] = 'x';
          count++;
        }
      }
    }
    res.push(temp.join(''));
    return res;
  },
};
