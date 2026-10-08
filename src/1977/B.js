/* eslint-disable max-depth */
module.exports = {
  buildArray: (num) => {
    const a = num.toString(2).split('').reverse().map(Number);
    const res = [];
    let isBlock = false;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] === 0) {
        if (isBlock) {
          if (a[i + 1] === 1) {
            res.push(-1);
            isBlock = true;
          } else {
            res.push(1);
            isBlock = false;
          }
        } else {
          res.push(0);
        }
      } else if (a[i + 1] === 1) {
        if (isBlock) {
          res.push(0);
        } else {
          isBlock = true;
          res.push(-1);
        }
      } else if (isBlock) {
        res.push(0);
      } else {
        res.push(1);
      }
    }
    if (isBlock) {
      res.push(1);
    }
    return res;
  },
};
