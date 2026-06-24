module.exports = {
  isInfinite: (map, arr) => {
    let curr = 0;
    for (let j = 0; j < arr.length; j++) {
      switch (map[curr]) {
        case '>':
          curr += arr[curr];
          break;
        case '<':
          curr -= arr[curr];
          break;
      }
    }
    return curr < 0 || curr >= arr.length ? 'FINITE' : 'INFINITE';
  },
};
