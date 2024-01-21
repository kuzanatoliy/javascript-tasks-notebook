module.exports = {
  isSolution: (numbers) => {
    const arr = numbers.sort((var1, var2) => var2 - var1);
    if (arr[0] < arr[1] + arr[2]) {
      return ['YES', [arr[2], arr[0], arr[1]].concat(arr.slice(3)).join(' ')];
    } else {
      return ['NO'];
    }
  },
};
