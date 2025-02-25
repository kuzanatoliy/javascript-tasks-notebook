module.exports = {
  getVariantsOfLikes: (map) => {
    const m = map.map((item) => Math.abs(item)).sort((a, b) => a - b);
    let o = 0;
    let d = 0;
    for (let j = 0; j < m.length; j++) {
      if (m[j] === m[j + 1]) {
        j++;
        d++;
      } else {
        o++;
      }
    }
    const max = [1];
    for (let k = 1; k < o + d; k++) {
      max.push(max[max.length - 1] + 1);
    }
    for (let kk = 0; kk < d; kk++) {
      max.push(max[max.length - 1] - 1);
    }
    const min = [];
    for (let f = 0; f < d; f++) {
      min.push(1);
      min.push(0);
    }
    for (let ff = 0; ff < o; ff++) {
      min.push(ff + 1);
    }
    return [max, min];
  },
};
