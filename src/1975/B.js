module.exports = {
  isBeautyArray: (arr) => {
    arr.sort((a, b) => a - b);
    const fls = new Array(arr.length).fill(1);
    let c = 0;
    const next = [];
    for (let j = 0; j < arr.length; j++) {
      fls[j] = arr[j] % arr[0];
      if (!fls[j]) {
        c++;
      } else {
        next.push(j);
      }
    }
    for (let jj = 0; jj < next.length; jj++) {
      fls[next[jj]] = arr[next[jj]] % arr[next[0]];
      if (!fls[next[jj]]) {
        c++;
      }
    }
    return c === arr.length ? 'YES' : 'NO';
  },
};
