module.exports = {
  getMinPower: (k, array) => {
    let difs = [];
    for (let j = 1; j < array.length; j++) {
      difs.push(Math.abs(array[j] - array[j - 1]));
    }
    difs = difs.sort((a, b) => b - a).slice(k - 1);
    return difs.reduce((a, b) => a + b, 0);
  },
};
