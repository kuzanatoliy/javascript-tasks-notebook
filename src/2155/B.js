module.exports = {
  isItPossibleToBuild: (num, k) => {
    if (num * num - k === 1) {
      return ['NO'];
    }
    let temp = k;
    const res = [];
    const templ = new Array(num).fill('R');
    templ[templ.length - 1] = 'L';
    for (let j = 0; j < num; j++) {
      res.push([...templ]);
      for (let jj = 0; jj < num; jj++) {
        if (temp) {
          res[j][jj] = 'U';
          temp--;
        } else if (jj === num - 1) {
          res[j][jj] = 'D';
          break;
        } else {
          break;
        }
      }
    }
    return ['YES', res];
  },
};
