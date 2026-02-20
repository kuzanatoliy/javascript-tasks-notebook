module.exports = {
  getCountOfSteps: (machines, queries) => {
    const res = [];
    let countA = 0;
    for (let a = 0; a < machines.length; a++) {
      countA += machines[a] === 'A';
    }
    if (countA === machines.length) {
      return queries;
    }
    for (let j = 0; j < queries.length; j++) {
      let m = 0;
      let s = 0;
      while (queries[j]) {
        if (machines[m] === 'A') {
          queries[j]--;
        } else {
          queries[j] = Math.floor(queries[j] / 2);
        }
        s++;
        m++;
        if (m === machines.length) {
          m = 0;
        }
      }
      res.push(s);
    }
    return res;
  },
};
