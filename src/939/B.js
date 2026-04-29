module.exports = {
  getOptimalConfig: (num, arr) => {
    let ind = 0;
    let d = num % arr[0];
    for (let j = 1; j < arr.length; j++) {
      const dd = num % arr[j];
      if (dd < d) {
        ind = j;
        d = dd;
      }
    }
    return [ind + 1, Math.floor(num / arr[ind])];
  },
};
