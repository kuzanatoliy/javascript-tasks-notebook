/* eslint-disable max-params */
module.exports = {
  isItPossibleToFeetFriends: (x, y, z, a, b, c) => {
    if (x > a) {
      return 'NO';
    }
    b += a - x;
    if (y > b) {
      return 'NO';
    }
    c += b - y;
    if (z > c) {
      return 'NO';
    }
    return 'YES';
  },
};
