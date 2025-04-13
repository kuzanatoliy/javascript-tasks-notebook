module.exports = {
  isItPossibleToTakeABus: (queries) => {
    const res = [];
    let store = 0;
    for (let j = 0; j < queries.length; j++) {
      if (queries[j][0] === 'P') {
        store += queries[j][1];
      } else {
        res.push(queries[j][1] > store ? 'YES' : 'NO');
        store -= Math.min(queries[j][1], store);
      }
    }
    return res;
  },
};
