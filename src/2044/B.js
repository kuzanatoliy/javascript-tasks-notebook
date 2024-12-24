module.exports = {
  getSecondString: (str) => {
    const arr = str.split('');
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 'p') {
        arr[j] = 'q';
        continue;
      }
      if (arr[j] === 'q') {
        arr[j] = 'p';
        continue;
      }
    }
    return arr.reverse().join('');
  },
};
