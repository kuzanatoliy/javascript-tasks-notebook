const isItPossibleToSplit = (num, target) => {
  if (num === target) {
    return 'YES';
  }
  if (num < target || num % 3) {
    return 'NO';
  }
  const d = num / 3;
  return isItPossibleToSplit(d, target) === 'YES' ||
    isItPossibleToSplit(d * 2, target) === 'YES'
    ? 'YES'
    : 'NO';
};

module.exports = {
  isItPossibleToSplit,
};
