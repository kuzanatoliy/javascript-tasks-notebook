module.exports = {
  getNotAdjacentMatrix: (number) => {
    if (number === 1) {
      return 1;
    }
    if (number === 2) {
      return -1;
    }
    const c = number ** 2;
    let temp = [];
    const result = [];
    let ii = 0;
    for (let j = 1; j <= c; j += 2) {
      temp.push(j);
      ii++;
      if (ii === number) {
        ii = 0;
        result.push(temp);
        temp = [];
      }
    }
    for (let j = 2; j <= c; j += 2) {
      temp.push(j);
      ii++;
      if (ii === number) {
        ii = 0;
        result.push(temp);
        temp = [];
      }
    }
    return result;
  },
};
