module.exports = {
  getTeleportsCount: (c, arr) => {
    const temp = arr.map((item, ind) => item + ind + 1).sort((a, b) => a - b);
    let count = 0;
    let lim = c;
    for (let j = 0; j < temp.length && lim >= temp[j]; j++) {
      count++;
      lim -= temp[j];
    }

    return count;
  },
};
