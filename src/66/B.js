module.exports = {
  getMaxCount: (arr) => {
    const counts = new Array(arr.length).fill(0);
    let currl = 0;
    let currr = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] >= arr[j - 1]) {
        currl++;
      } else {
        currl = 0;
      }
      counts[j] += currl;
      if (arr[arr.length - j] <= arr[arr.length - j - 1]) {
        currr++;
      } else {
        currr = 0;
      }
      counts[arr.length - j - 1] += currr;
    }
    return Math.max(...counts) + 1;
  },
};
