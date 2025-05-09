module.exports = {
  getCountOfFaces: (map) => {
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '-') {
        c1++;
      } else {
        c2++;
      }
    }
    const d = c1 / 2;
    return Math.floor(d) * Math.ceil(d) * c2;
  },
};
