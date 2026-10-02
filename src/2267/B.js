/* eslint-disable max-depth */
module.exports = {
  transformArray: (arr) => {
    const temp = new Array(101).fill(0);
    for (let j = 0; j < arr.length; j++) {
      temp[arr[j]]++;
    }
    const res = [];
    for (let jj = temp.length - 1; jj > 0; jj--) {
      if (temp[jj]) {
        const d = temp[jj];
        for (let jjj = jj; jjj > 0; jjj--) {
          if (temp[jjj]) {
            let dd = Math.min(temp[jjj], d);
            temp[jjj] -= dd;
            while (dd) {
              res.push(jjj);
              dd--;
            }
          }
        }
      }
    }
    return res;
  },
};
