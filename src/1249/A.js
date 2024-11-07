module.exports = {
  getCountOfTeams: (arr) => {
    const f = {};
    for (let j = 0; j < arr.length; j++) {
      f[`${arr[j] - 1}/${arr[j]}`] = (f[`${arr[j] - 1}/${arr[j]}`] || 0) + 1;
      f[`${arr[j]}/${arr[j] + 1}`] = (f[`${arr[j]}/${arr[j] + 1}`] || 0) + 1;
    }
    const keys = Object.keys(f);
    let max = f[keys[0]];
    for (let jj = 1; jj < keys.length; jj++) {
      if (max < f[keys[jj]]) {
        max = f[keys[jj]];
      }
    }
    return max;
  },
};
