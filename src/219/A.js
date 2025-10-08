module.exports = {
  getKString: (num, str) => {
    const map = {};
    for (let j = 0; j < str.length; j++) {
      map[str[j]] = (map[str[j]] || 0) + 1;
    }
    let temp = '';
    const keys = Object.keys(map);
    for (let jj = 0; jj < keys.length; jj++) {
      if (map[keys[jj]] % num) {
        return -1;
      }
      temp += new Array(map[keys[jj]] / num).fill(keys[jj]).join('');
    }
    return new Array(num).fill(temp).join('');
  },
};
