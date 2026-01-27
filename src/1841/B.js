/* eslint-disable camelcase */
module.exports = {
  getMap: (arr) => {
    const temp = [arr[0]];
    let res = '1';
    let round_1 = true;
    for (let j = 1; j < arr.length; j++) {
      if (round_1) {
        if (arr[j] >= temp[temp.length - 1]) {
          temp.push(arr[j]);
          res += '1';
        } else if (arr[j] <= temp[0]) {
          temp.push(arr[j]);
          res += '1';
          round_1 = false;
        } else {
          res += '0';
        }
      } else if (arr[j] >= temp[temp.length - 1] && arr[j] <= temp[0]) {
        temp.push(arr[j]);
        res += '1';
      } else {
        res += '0';
      }
    }
    return res;
  },
};
