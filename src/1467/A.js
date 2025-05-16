module.exports = {
  getMaxNum: (num) => {
    const next = '0123456789';
    let res = '989';
    while (res.length < num) {
      res += next;
    }
    const arr = res.split('');
    arr.length = num;
    return arr.join('');
  },
};
