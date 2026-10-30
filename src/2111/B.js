module.exports = {
  getMap: (num, boxes) => {
    let map = '';
    let big = 2;
    let smal = 1;
    for (let j = 2; j < num; j++) {
      const cand = big + smal;
      smal = big;
      big = cand;
    }
    for (const box of boxes) {
      box.sort((a, b) => a - b);
      map +=
        box[0] >= big &&
        box[1] >= big &&
        box[2] >= big &&
        box[0] >= smal &&
        box[1] >= smal &&
        box[2] >= big + smal
          ? '1'
          : '0';
    }
    return map;
  },
};
