/* eslint-disable max-params */
module.exports = {
  getBrokenStep: (arr) => {
    let can = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > can) {
        return j + 1;
      }
      can += arr[j] === can;
    }
    return -1;
  },
};
