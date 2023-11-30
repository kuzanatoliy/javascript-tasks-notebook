module.exports = {
  getCountOfShovels: (price, coin) => {
    let i = 0;
    let temp = 0;
    do {
      temp = (+temp + price).toString();
      i++;
    } while (temp.at(-1) !== coin.toString() && temp.at(-1) !== '0');
    return i;
  },
};
