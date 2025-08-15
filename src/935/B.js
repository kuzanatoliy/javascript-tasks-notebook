module.exports = {
  getCountOfCrossMoves: (map) => {
    let count = 0;
    let x = 1;
    let y = 0;
    let fl = true;
    if (map[0] === 'U') {
      x = 0;
      y = 1;
      fl = false;
    }
    for (let j = 1; j < map.length; j++) {
      if (map[j] === 'R') {
        x++;
      } else if (map[j] === 'U') {
        y++;
      }
      const d = x - y;
      if (d !== 0 && (fl ? x < y : x > y)) {
        fl = !fl;
        count++;
      }
    }
    return count;
  },
};
