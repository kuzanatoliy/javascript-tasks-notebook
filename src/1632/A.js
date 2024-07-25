module.exports = {
  isItPossibleToReorder: (string) =>
    string === '0' || string === '1' || string === '10' || string === '01'
      ? 'YES'
      : 'NO',
};
