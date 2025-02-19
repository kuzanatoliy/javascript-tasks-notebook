module.exports = {
  getBoard: (num) => {
    const count = Math.ceil((num * num) / 2);
    const res = [count];
    for (let j = 0; j < num; j++) {
      const arr = new Array(num).fill('.');
      for (let jj = j % 2; jj < num; jj += 2) {
        arr[jj] = 'C';
      }
      res.push(arr);
    }
    return res;
  },
};
