module.exports = {
  getResult: (initCount, iterations) => {
    let count = initCount;
    let groups = 0;
    for (let j = 0; j < iterations.length; j++) {
      if (iterations[j][0] === '+') {
        count += iterations[j][1];
        continue;
      }
      if (iterations[j][1] > count) {
        groups++;
        continue;
      }
      count -= iterations[j][1];
    }
    return [count, groups];
  },
};
