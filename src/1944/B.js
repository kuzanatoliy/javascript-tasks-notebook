module.exports = {
  buildArrs: (k, arr) => {
    const x = arr.slice(0, arr.length / 2);
    const y = arr.slice(arr.length / 2);
    let map1 = new Map();
    let map2 = new Map();
    for (let i = 0; i < x.length; i++) {
      map1.set(x[i], (map1.get(x[i]) || 0) + 1);
      map2.set(y[i], (map2.get(y[i]) || 0) + 1);
    }
    const l = [];
    const r = [];
    map1 = Array.from(map1.entries()).sort((a, b) => b[1] - a[1]);
    map2 = Array.from(map2.entries()).sort((a, b) => b[1] - a[1]);
    let i = 0;
    k *= 2;
    while (k > 0) {
      if (map1[i][1] === 2) {
        l.push(map1[i][0]);
        l.push(map1[i][0]);
        r.push(map2[i][0]);
        r.push(map2[i][0]);
        k -= 2;
      } else {
        l.push(map1[i][0]);
        r.push(map1[i][0]);
        k--;
      }
      i++;
    }
    return [l, r];
  },
};
