module.exports = {
  isItPossibleToBuild: (str, map) => {
    const arr = str.split('');
    let m = 0;
    let j = 0;
    for (; j < arr.length && m < map.length; j++) {
      if (arr[j] === map[m]) {
        m++;
      } else if (arr[j] === '?') {
        arr[j] = map[m];
        m++;
      }
    }
    for (; j < arr.length; j++) {
      if (arr[j] === '?') {
        arr[j] = 'a';
      }
    }
    return m === map.length ? ['YES', arr.join('')] : ['NO'];
  },
};
