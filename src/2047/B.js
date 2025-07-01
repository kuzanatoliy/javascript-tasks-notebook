module.exports = {
  transformStr: (str) => {
    const arr = str.split('');
    const map = {};
    for (let j = 0; j < arr.length; j++) {
      if (map[arr[j]]) {
        map[arr[j]].push(j);
      } else {
        map[arr[j]] = [j];
      }
    }
    const keys = Object.keys(map);
    if (keys.length === 1) {
      return str;
    }
    let max = map[keys[0]];
    let min = map[keys[1]];
    if (max.length < min.length) {
      max = map[keys[1]];
      min = map[keys[0]];
    }
    for (let jj = 1; jj < keys.length; jj++) {
      if (max.length < map[keys[jj]].length) {
        max = map[keys[jj]];
        continue;
      }
      if (min.length > map[keys[jj]].length) {
        min = map[keys[jj]];
      }
    }
    arr[min[0]] = arr[max[0]];
    return arr.join('');
  },
};
