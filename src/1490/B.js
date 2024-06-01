module.exports = {
  getCountOfMoves: (array) => {
    let c0 = 0;
    let c1 = 0;
    let c2 = 0;
    array.forEach((val) => {
      const x = val % 3;
      c0 += x === 0;
      c1 += x === 1;
      c2 += x === 2;
    });
    let count = 0;
    const tar = array.length / 3;
    if (c0 < tar && c1 < tar) {
      count += tar - c0;
      count += 2 * (tar - c1);
    } else if (c0 < tar && c2 < tar) {
      count += 2 * (tar - c0);
      count += tar - c2;
    } else if (c1 < tar && c2 < tar) {
      count += tar - c1;
      count += 2 * (tar - c2);
    } else if (c0 < tar) {
      count += c2 - tar;
      count += 2 * (c1 - tar);
    } else if (c1 < tar) {
      count += c0 - tar;
      count += 2 * (c2 - tar);
    } else if (c2 < tar) {
      count += c1 - tar;
      count += 2 * (c0 - tar);
    }
    return count;
  },
};
