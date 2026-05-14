module.exports = {
  getMaxAmount: (k, arr) => {
    let am = 0;
    const ams = new Array(k).fill(0);
    for (let j = 0; j < arr.length; j++) {
      am += arr[j];
      ams[j % k] += arr[j];
    }
    return Math.max(...ams.map((item) => Math.abs(am - item)));
  },
};
