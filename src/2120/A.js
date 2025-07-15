/* eslint-disable max-params */
module.exports = {
  isItPossibleToGetSquare: (l1, b1, l2, b2, l3, b3) => {
    if (
      (l1 === l2 && l2 === l3 && l1 === b1 + b2 + b3) ||
      (b1 === b2 && b2 === b3 && b1 === l1 + l2 + l3) ||
      (l1 + l2 === l1 + l3 && l1 + l3 === b1 && b1 === b2 + b3) ||
      (b1 + b2 === b1 + b3 && b1 + b3 === l1 && l1 === l2 + l3)
    ) {
      return 'YES';
    }
    return 'NO';
  },
};
