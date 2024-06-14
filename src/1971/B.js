module.exports = {
  isItPossibleToChange: (string) => {
    const arr = string.split('');
    const set = new Set(arr);
    if (set.size === 1) {
      return ['NO'];
    }
    return [
      'YES',
      arr[0] !== arr[arr.length - 1]
        ? arr.reverse().join('')
        : arr.sort().join(''),
    ];
  },
};
