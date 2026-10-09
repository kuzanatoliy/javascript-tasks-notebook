module.exports = {
  getDif: (snum) => {
    const res = [];
    if (snum[0] === '9') {
      let d = 0;
      for (let j = snum.length - 1; j >= 0; j--) {
        const temp = +snum[j] + d;
        if (temp === 1) {
          res.push(0);
          d = 0;
        } else if (temp === 0) {
          res.push(1);
          d = 0;
        } else {
          res.push(11 - temp);
          d = 1;
        }
      }
      res.reverse();
    } else {
      for (let jj = 0; jj < snum.length; jj++) {
        res.push(9 - +snum[jj]);
      }
    }
    return res.join('');
  },
};
