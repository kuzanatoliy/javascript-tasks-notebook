module.exports = {
  checkPermution: (string1, string2, permution) =>
    (string1 + string2).split('').sort().join('') ===
    permution.split('').sort().join('')
      ? 'YES'
      : 'NO',
};
