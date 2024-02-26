module.exports = {
  getBetterPair: (array) => {
    let pair = [];
    let dif = 9999;
    let d = 0;
    for (let j = 1; j < array.length; j++) {
      d = Math.abs(array[j] - array[j - 1]);
      if (dif > d) {
        pair = [j, j + 1];
        dif = d;
      }
    }
    d = Math.abs(array[0] - array[array.length - 1]);
    if (dif > d) {
      pair = [1, array.length];
      dif = d;
    }
    return pair;
  },
};
