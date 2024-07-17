module.exports = {
  getMinDif: (strings) => {
    let dif = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < strings.length; j++) {
      for (let jj = j + 1; jj < strings.length; jj++) {
        let d = 0;
        for (let jjj = 0; jjj < strings[j].length; jjj++) {
          d += Math.abs(
            strings[j][jjj].charCodeAt() - strings[jj][jjj].charCodeAt()
          );
        }
        if (d < dif) {
          dif = d;
        }
      }
    }
    return dif;
  },
};
