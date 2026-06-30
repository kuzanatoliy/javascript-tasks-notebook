module.exports = {
  getWayToAssignSeats: (num, r, c) => {
    if (num > r * c) {
      return [[-1]];
    }
    const map = Array.from({ length: r }, () => new Array(c).fill(0));
    let ind = 0;
    for (let j = 0; j < map.length && ind < num; j++) {
      for (let jj = 0; jj < map[j].length && ind < num; jj++) {
        ind++;
        map[j][jj] = ind;
      }
    }
    for (let k = 1; k < map.length; k += 2) {
      map[k] = map[k].reverse();
    }
    return map;
  },
};
