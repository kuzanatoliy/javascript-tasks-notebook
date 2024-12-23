/* eslint-disable prefer-destructuring */

module.exports = {
  getResultString: (str) => {
    const arr = new Array(str.length).fill(0);
    let l = -1;
    let u = -1;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === 'b' && l !== -1) {
        const temp = arr[l][1];
        arr[l] = 0;
        l = temp;
        continue;
      }
      if (str[j] === 'B' && u !== -1) {
        const temp = arr[u][1];
        arr[u] = 0;
        u = temp;
        continue;
      }
      if (str[j] === 'b' || str[j] === 'B') {
        continue;
      }
      if (str[j].charCodeAt() > 95) {
        arr[j] = [str[j], l];
        l = j;
        continue;
      }
      arr[j] = [str[j], u];
      u = j;
    }
    return arr
      .filter((item) => item !== 0)
      .map((item) => item[0])
      .join('');
  },
};
