const map = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];

module.exports = {
  getColors: (array) => {
    let c = 1;
    const colors = new Array(array.length).fill(0);
    for (let j = 0; j < map.length; j++) {
      let f = false;
      for (let jj = 0; jj < array.length; jj++) {
        if (colors[jj] === 0 && array[jj] % map[j] === 0) {
          colors[jj] = c;
          f = true;
        }
      }
      if (f) {
        c++;
      }
    }
    return [new Set(colors).size, colors];
  },
};
