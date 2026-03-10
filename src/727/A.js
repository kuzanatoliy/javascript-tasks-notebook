module.exports = {
  isItPossibleToBuild: (a, b) => {
    const temp = [b];
    while (a < b) {
      const sb = b.toString();
      const d = +sb[sb.length - 1];
      if (d === 1) {
        b = (b - 1) / 10;
        temp.push(b);
      } else if (d % 2) {
        return ['NO'];
      } else {
        b /= 2;
        temp.push(b);
      }
    }
    return a === b ? ['YES', temp.reverse()] : ['NO'];
  },
};
