module.exports = {
  getInteger: (number) => {
    if (number > 45) {
      return -1;
    }
    let d = 9;
    const store = [];
    while (d > 0 && d < number) {
      number -= d;
      store.push(d);
      d--;
    }
    store.push(number);
    return Number(store.reverse().join(''));
  },
};
