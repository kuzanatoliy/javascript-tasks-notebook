module.exports = {
  getMinNumberOfReplacements: (distance, string) => {
    let c = 0;
    let d = 0;
    let p = 0;

    let first = false;
    let last = false;

    for (let j = 0; j < string.length; j++) {
      d++;
      if (string[j] === '*') {
        if (!first) {
          first = true;
          last = true;
          c++;
          d = 0;
        } else if (d > distance && p > 0) {
          j = p;
          last = true;
          p = 0;
          d = 0;
          c++;
        } else {
          last = false;
          p = j;
        }
      }
    }
    if (!last) {
      c++;
    }

    return c;
  },
};
