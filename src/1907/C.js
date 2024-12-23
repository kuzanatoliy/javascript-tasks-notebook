module.exports = {
  getStrLength: (str) => {
    const arr = new Array(26).fill(0);
    for (let j = 0; j < str.length; j++) {
      arr[str[j].charCodeAt() - 97]++;
    }
    const max = Math.max(...arr);
    const other = str.length - max;
    return max > other ? max - other : str.length % 2;
  },
};
