module.exports = {
  getNumbers: (count, friends, queries) => {
    const deg = Array(count + 1).fill(0);
    for (let j = 0; j < friends.length; j++) {
      ++deg[Math.min(...friends[j])];
    }

    let ans = 0;
    for (let u = 1; u <= count; u++) {
      ans += deg[u] === 0;
    }

    const res = [];

    for (let q = 0; q < queries.length; q++) {
      if (queries[q][0] === 1) {
        if (++deg[Math.min(queries[q][1], queries[q][2])] === 1) {
          ans--;
        }
      } else if (queries[q][0] === 2) {
        if (--deg[Math.min(queries[q][1], queries[q][2])] === 0) {
          ans++;
        }
      } else {
        res.push(ans);
      }
    }

    return res;
  },
};
