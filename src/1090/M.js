module.exports = {
  getMaxSubarrLength: (arr) => {
    let curr = 1;
    let max = 1;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] === arr[j]) {
        curr = 1;
      } else {
        curr++;
        max = Math.max(curr, max);
      }
    }
    return max;
  },
};
