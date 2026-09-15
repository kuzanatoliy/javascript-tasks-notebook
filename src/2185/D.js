/* eslint-disable prefer-destructuring */
module.exports = {
  transformArray: (h, arr, op) => {
    const limit = arr.map((item) => h - item);
    const cumAdd = new Array(arr.length).fill(0);
    const lastUsed = new Array(arr.length).fill(0);

    let crash = 0;

    for (let i = 1; i <= op.length; i++) {
      const b = op[i - 1][0] - 1;
      const c = op[i - 1][1];

      if (lastUsed[b] < crash) {
        cumAdd[b] = 0;
        lastUsed[b] = crash;
      }

      cumAdd[b] += c;

      if (cumAdd[b] > limit[b]) {
        crash = i;
      }
    }
    return arr.map(
      (val, idx) => val + (lastUsed[idx] >= crash ? cumAdd[idx] : 0)
    );
  },
};
