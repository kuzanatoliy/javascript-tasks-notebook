module.exports = {
  getCountOfRedItems: (str) => {
    const l = new Array(26).fill(0);

    for (let j = 0; j < str.length; j++) {
      l[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let c1 = 0;
    let c2 = 0;

    for (let j = 0; j < l.length; j++) {
      if (!l[j]) {
        continue;
      }
      if (l[j] > 1) {
        c1++;
        continue;
      }
      c2++;
    }

    return Math.floor(c1 + c2 / 2);
  },
};
