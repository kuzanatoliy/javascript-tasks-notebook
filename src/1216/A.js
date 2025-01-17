module.exports = {
  transformString: (str) => {
    const arr = str.split('');
    let count = 0;
    for (let j = 0; j < arr.length; j += 2) {
      if (arr[j] === arr[j + 1]) {
        count++;
        arr[j] = arr[j] === 'a' ? 'b' : 'a';
      }
    }
    return [count, arr.join('')];
  },
};
