const NUMBERS = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

module.exports = {
  isFollowingNumber: (first, second) =>
    NUMBERS[NUMBERS.findIndex((item) => item === first) + 1] === second
      ? 'YES'
      : 'NO',
};
