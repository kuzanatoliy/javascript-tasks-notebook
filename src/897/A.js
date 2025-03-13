/* eslint-disable prefer-destructuring */
module.exports = {
  transformString: (str, queries) => {
    const map = str.split('');
    for (let j = 0; j < queries.length; j++) {
      for (let jj = queries[j][0] - 1; jj < queries[j][1]; jj++) {
        if (map[jj] === queries[j][2]) {
          map[jj] = queries[j][3];
        }
      }
    }
    return map.join('');
  },
};
