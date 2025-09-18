module.exports = {
  isItPossibleToFit: (boxes, items) => {
    var c1 = boxes[0] - items[0];
    var c2 = boxes[1] - items[1];
    var c3 = boxes[2] - items[2];
    if (c1 < 0 || c2 < 0 || c3 < 0) {
      return 'NO';
    }
    if (c1 < items[3]) {
      items[3] -= c1;
      c3 -= items[3];
    }
    if (c2 < items[4]) {
      items[4] -= c2;
      c3 -= items[4];
    }
    return c3 < 0 ? 'NO' : 'YES';
  },
};
