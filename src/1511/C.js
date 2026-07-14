module.exports = {
  getOrder: (cards, queries) => {
    const temp = Array.from({ length: 51 }, () => Infinity);
    for (let j = cards.length - 1; j >= 0; j--) {
      temp[cards[j]] = j;
    }
    const res = [];
    for (let jj = 0; jj < queries.length; jj++) {
      res.push(temp[queries[jj]] + 1);
      for (let jjj = 0; jjj < temp.length; jjj++) {
        if (temp[jjj] < temp[queries[jj]]) {
          temp[jjj]++;
        }
      }
      temp[queries[jj]] = 0;
    }
    return res;
  },
};
