module.exports = {
  isSubstringExist: (number, array) =>
    array.find((item) => item === number) ? 'YES' : 'NO',
};
