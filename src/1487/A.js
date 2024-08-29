module.exports = {
  getCountOfWinners: (array) => {
    const map = new Array(102).fill(0);
    for (let j = 0; j < array.length; j++) {
      map[array[j]]++;
    }
    let min = 1000;
    for (let jj = 0; jj < array.length; jj++) {
      if (array[jj] < min) {
        min = array[jj];
      }
    }
    return array.length - map[min];
  },
};
