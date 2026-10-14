module.exports = {
  buildMatrix: (num) => {
    let l = 1;
    let r = num * num;
    const matrix = [];
    for (let j = 0; j < num; j += 2) {
      let next = [];
      for (let jj = 0; jj < num; jj++) {
        if ((j + jj) % 2) {
          next.push(l);
          l++;
        } else {
          next.push(r);
          r--;
        }
      }
      matrix.push(next);
      next = [];
      for (let jjj = 0; jjj < num; jjj++) {
        if ((j + jjj + (num % 2)) % 2) {
          next.push(l);
          l++;
        } else {
          next.push(r);
          r--;
        }
      }
      matrix.push(next.reverse());
    }
    matrix.length = num;
    return matrix;
  },
};
