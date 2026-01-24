module.exports = {
  getPair: (arr) => {
    const evens = arr[0] % 2 ? [] : [arr[0]];
    for (let j = 1; j < arr.length && evens.length < 2; j++) {
      if ((arr[j] % arr[j - 1]) % 2 === 0) {
        return [arr[j - 1], arr[j]];
      }
      if (arr[j] % 2 === 0) {
        evens.push(arr[j]);
      }
    }
    if (evens.length === 2) {
      return [evens[0], evens[1]];
    }
    for (let jj = 0; jj < arr.length; jj++) {
      for (let jjj = jj + 1; jjj < arr.length; jjj++) {
        if ((arr[jjj] % arr[jj]) % 2 === 0) {
          return [arr[jj], arr[jjj]];
        }
      }
    }
    return [-1];
  },
};
