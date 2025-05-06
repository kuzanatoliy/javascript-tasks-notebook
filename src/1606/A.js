/* eslint-disable prefer-destructuring */
module.exports = {
  transformString: (str) => {
    const arr = str.split('');
    arr[arr.length - 1] = arr[0];
    return arr.join('');
  },
};
