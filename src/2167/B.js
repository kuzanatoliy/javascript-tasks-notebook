module.exports = {
  isPositiveResponses: (name1, name2) =>
    name1.split('').sort().join('') === name2.split('').sort().join('')
      ? 'YES'
      : 'NO',
};
