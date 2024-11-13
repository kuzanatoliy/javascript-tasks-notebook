module.exports = {
  isItPossibleToGetNoPolindrome: (str) => {
    const arr = str.split('');
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== 'a') {
        const newArr = ['a', ...arr];
        const newStr = newArr.join('');
        return [
          'YES',
          newStr === newArr.reverse().join('')
            ? [...arr, 'a'].join('')
            : newStr,
        ];
      }
    }
    return ['NO'];
  },
};
