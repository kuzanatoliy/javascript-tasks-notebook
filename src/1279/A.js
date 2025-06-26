module.exports = {
  isItPossibleToBuildGarland: (r, g, b) =>
    r + g + 1 >= b && g + b + 1 >= r && b + r + 1 >= g ? 'YES' : 'NO',
};
