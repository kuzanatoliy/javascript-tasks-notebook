module.exports = {
  getCountOfPairs: (arr) => {
    const m = [new Map(), new Map(), new Map(), new Map()];
    let cnt = 0;

    for (let i = 2; i < arr.length; i++) {
      const obj = [
        {
          a: arr[i - 2],
          b: arr[i - 1],
        },
        {
          a: arr[i - 2],
          b: arr[i],
        },
        {
          a: arr[i - 1],
          b: arr[i],
        },
        {
          a: arr[i - 2],
          b: arr[i - 1],
          c: arr[i],
        },
      ];

      for (let j = 0; j < 4; j++) {
        const cur = JSON.stringify(obj[j]);

        if (!m[j].get(cur)) {
          m[j].set(cur, 0);
        }

        if (j === 3) {
          cnt -= 3 * m[j].get(cur);

          m[j].set(cur, m[j].get(cur) + 1);
        } else {
          cnt += m[j].get(cur);

          m[j].set(cur, m[j].get(cur) + 1);
        }
      }
    }

    return cnt;
  },
};
