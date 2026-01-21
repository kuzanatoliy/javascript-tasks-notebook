module.exports = {
  getCountOfTeams: (arr, D) => {
    arr.sort((a, b) => b - a);
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      const d = Math.ceil(D / arr[j]);
      if (count + d > arr.length) {
        return j;
      }
      count += d;
    }
    return arr.length;
  },
};
