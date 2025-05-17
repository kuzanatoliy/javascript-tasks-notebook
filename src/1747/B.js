module.exports = {
  transformBan: (num) => {
    const arr = 'BAN'.repeat(num).split('');
    const operations = [];
    for (let i = 0, j = arr.length - 1; i < j; ) {
      if (arr[i] !== 'A') {
        ++i;
      } else if (arr[j] !== 'N') {
        --j;
      } else {
        operations.push(i + 1, j + 1);
        arr[i] = 'N';
        arr[j] = 'A';
      }
    }
    const res = [];
    for (let i = 0; i < operations.length; i += 2) {
      res.push([operations[i], operations[i + 1]]);
    }
    return res;
  },
};
