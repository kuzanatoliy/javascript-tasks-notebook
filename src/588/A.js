/* eslint-disable prefer-destructuring */
module.exports = {
  getAmount: (props) => {
    let min = props[0][1];
    let sum = 0;
    for (let j = 0; j < props.length; j++) {
      if (min > props[j][1]) {
        min = props[j][1];
      }
      sum += props[j][0] * min;
    }
    return sum;
  },
};
