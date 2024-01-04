module.exports = {
  isItPossibleToCutSheet: (params) => {
    let c = 1;
    while (params[0] % 2 === 0 && c < params[2]) {
      params[0] /= 2;
      c *= 2;
    }
    while (params[1] % 2 === 0 && c < params[2]) {
      params[1] /= 2;
      c *= 2;
    }
    return c >= params[2] ? 'YES' : 'NO';
  },
};
