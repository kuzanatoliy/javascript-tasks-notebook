module.exports = {
  getCountOfGoodNumbers: (snum) => {
    const store = snum.split('').map((item) => +item);
    let add = 1;
    for (let j = 1; j < store.length; j++) {
      if (store[0] > store[j]) {
        add = 0;
        break;
      } else if (store[0] < store[j]) {
        break;
      }
    }
    return (snum.length - 1) * 9 + store[0] - 1 + add;
  },
};
