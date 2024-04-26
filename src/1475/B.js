module.exports = {
  isItRepresentableAsTheSumOf2020: (number) =>
    number % 2020 > number / 2020 ? 'NO' : 'YES',
};
