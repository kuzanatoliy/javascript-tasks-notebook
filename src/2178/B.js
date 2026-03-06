module.exports = {
  getCountOfOperations: (str) => {
    const arr = str.split('');
    let count = 0;
    if (arr[0] === 'u') {
      count++;
      arr[0] = 's';
    }
    if (arr[arr.length - 1] === 'u') {
      count++;
      arr[arr.length - 1] = 's';
    }
    for (let j = 2; j < arr.length; j++) {
      if (arr[j] === 'u' && arr[j - 1] === 'u') {
        count++;
        arr[j] = 's';
      }
    }
    return count;
  },
};
