module.exports = {
  getPathArtifacts: (str) => {
    let [a] = str;
    let b = str[str.length - 1];
    let f = 0;
    if (a > b) {
      const temp = a;
      a = b;
      b = temp;
      f = 1;
    }
    const r = [];
    for (let i = 1; i < str.length - 1; i++) {
      if (str[i] >= a && str[i] <= b) {
        r.push(i + 1);
      }
    }
    r.sort((p, q) => str.charCodeAt(p - 1) - str.charCodeAt(q - 1));
    if (f) {
      r.reverse();
    }
    r.unshift(1);
    r.push(str.length);
    return [b.charCodeAt(0) - a.charCodeAt(0), r];
  },
};
