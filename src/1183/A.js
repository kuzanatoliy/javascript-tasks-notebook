/* eslint-disable no-constant-condition */
module.exports = {
  getNirestNumber: (num) => {
    while (true) {
      const arr = num
        .toString()
        .split('')
        .map((item) => +item);
      let sum = 0;
      for (let j = 0; j < arr.length; j++) {
        sum += arr[j];
      }
      if (sum % 4 === 0) {
        break;
      }
      num++;
    }
    return num;
  },
};
