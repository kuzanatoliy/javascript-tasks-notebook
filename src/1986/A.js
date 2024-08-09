/* eslint-disable prefer-destructuring */
module.exports = {
  getSmallestValue: (array) => {
    const a = array.sort((ai, bi) => ai - bi)[1];
    return (
      Math.abs(array[0] - a) + Math.abs(array[1] - a) + Math.abs(array[2] - a)
    );
  },
};
