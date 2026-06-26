module.exports = {
  getOrder: (num, m) => {
    const map = new Array(num);
    for (let i = 0; i < num; i++) {
      map[i] = new Array(4).fill(0);
    }
    let now = 1;
    for (let j = num - 1; j >= 0; j--) {
      if (now <= m) {
        map[j][0] = now;
        now++;
      }
      if (now <= m) {
        map[j][3] = now;
        now++;
      }
    }
    for (let jj = num - 1; jj >= 0; jj--) {
      if (now <= m) {
        map[jj][1] = now;
        now++;
      }
      if (now <= m) {
        map[jj][2] = now;
        now++;
      }
    }
    const output = [];
    const v = [1, 0, 2, 3];
    for (let jjj = num - 1; jjj >= 0; jjj--) {
      for (let jjjj = 0; jjjj < v.length; jjjj++) {
        if (map[jjj][v[jjjj]]) {
          output.push(map[jjj][v[jjjj]]);
        }
      }
    }
    return output;
  },
};
