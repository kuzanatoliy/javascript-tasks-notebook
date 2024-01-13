module.exports = {
  getSums: (numbers, queries) => {
    let c1 = 0;
    let c2 = 0;
    let sum = 0;
    const sums = [];
    for (let k = 0; k < numbers.length; k++) {
      if (numbers[k] % 2 === 1) {
        c1++;
      } else {
        c2++;
      }
      sum += numbers[k];
    }
    for (let j = 0; j < queries.length; j++) {
      if (queries[j][0] === 0) {
        sum += c2 * queries[j][1];
      } else {
        sum += c1 * queries[j][1];
      }
      if (queries[j][0] === 1 && c1 > 0 && queries[j][1] % 2 === 1) {
        c2 = numbers.length;
        c1 = 0;
      }
      if (queries[j][0] === 0 && c2 > 0 && queries[j][1] % 2 === 1) {
        c1 = numbers.length;
        c2 = 0;
      }
      sums.push(sum);
    }
    return sums;
  },
};
