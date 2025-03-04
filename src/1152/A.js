module.exports = {
  getCountOfOpenedBoxes: (boxes, keys) => {
    let k0 = 0;
    let k1 = 0;
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] % 2 === 0) {
        k0++;
      } else {
        k1++;
      }
    }
    let count = 0;
    for (let jj = 0; jj < boxes.length; jj++) {
      const d = boxes[jj] % 2;
      if (d === 0 && k1 > 0) {
        k1--;
        count++;
      } else if (d === 1 && k0 > 0) {
        k0--;
        count++;
      }
    }
    return count;
  },
};
