module.exports = {
  isItPossibleToSolve: (sizes) =>
    (sizes[0] === 2 && sizes[1] === 2) || sizes[0] === 1 || sizes[1] === 1
      ? 'YES'
      : 'NO',
};
