module.exports = {
  getPositionValue: (num) => {
    let j = 1;
    let js = '1';
    while (js.length < num) {
      num -= js.length;
      j++;
      js = j.toString();
    }
    return js[num - 1];
  },
};
