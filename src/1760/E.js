module.exports = {
  getPairsCount: (arr) => {
    let ind0 = null;
    let ind1 = null;
    let c1 = 0;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        count += c1;
        ind0 = ind0 === null ? c1 : ind0;
      } else {
        c1++;
        ind1 = j;
      }
    }
    return Math.max(
      count,
      count - ind0 + arr.length - c1 - 1,
      count - arr.length + ind1 + 1 + c1 - 1
    );
  },
};
