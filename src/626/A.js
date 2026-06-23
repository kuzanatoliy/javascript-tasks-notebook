module.exports = {
  getPathCount: (map) => {
    const temp = new Array(map.length).fill(0).map((_, ind) => {
      switch (map[ind]) {
        case 'L':
          return [-1, 0];
        case 'R':
          return [1, 0];
        case 'D':
          return [0, -1];
        case 'U':
          return [0, 1];
        default:
          return [0, 0];
      }
    });
    let count = 0;
    for (let j = 1; j < map.length; j++) {
      for (let jj = map.length - 1; jj >= j; jj--) {
        switch (map[jj - j]) {
          case 'L':
            temp[jj][0]--;
            break;
          case 'R':
            temp[jj][0]++;
            break;
          case 'D':
            temp[jj][1]--;
            break;
          case 'U':
            temp[jj][1]++;
            break;
        }
        count += !temp[jj][0] && !temp[jj][1];
      }
    }
    return count;
  },
};
