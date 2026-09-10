module.exports = {
  getPair: (num) => {
    const temp = num
      .toString()
      .split('')
      .map((item) => +item);
    let d = Math.floor(temp.reduce((a, b) => a + b) / 2);
    const store = new Array(temp.length).fill(0);
    for (let j = 0; j < temp.length; j++) {
      if (d > temp[j]) {
        store[j] = temp[j];
        d -= temp[j];
      } else {
        store[j] = d;
        break;
      }
    }
    const res = +store.join('');
    return [res, num - res];
  },
};
