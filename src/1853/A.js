module.exports = {
  getCountOfOperations: (array) => {
    let mindif = 1000000000;
    for (let j = 1; j < array.length; j++) {
      const dif = array[j] - array[j - 1];
      if (dif < 0) {
        return 0;
      } else if (dif < mindif) {
        mindif = dif;
      }
    }
    return Math.floor(mindif / 2) + 1;
  },
};
