module.exports = {
  getResults: (array, queries) => {
    let x = 0;
    let y = 0;
    const ans = new Array(queries.length);
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 1) {
        x++;
      } else {
        y++;
      }
    }

    x = Math.min(x, y) * 2;

    for (let i = 0; i < queries.length; i++) {
      const l = queries[i];
      ans[i] = l[1] - l[0] + 1 > x || (l[1] - l[0]) % 2 === 0 ? 0 : 1;
    }

    return ans;
  },
};
