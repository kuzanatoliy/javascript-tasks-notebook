module.exports = {
  mightGetTen: (a, b, c) =>
    a + b >= 10 || a + c >= 10 || b + c >= 10 ? 'YES' : 'NO',
};
