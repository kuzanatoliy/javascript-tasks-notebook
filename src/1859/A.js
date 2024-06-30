module.exports = {
  getArrays: (array) => {
    const arr = array.sort((a, b) => a - b);
    const a = [];
    if (arr[0] === arr[arr.length - 1]) {
      return [-1];
    }
    a.push(arr[0]);
    let j = 1;
    while (arr[j] === arr[j - 1]) {
      a.push(arr[j]);
      j++;
    }
    const b = arr.slice(a.length, arr.length);
    return [a, b];
  },
};
