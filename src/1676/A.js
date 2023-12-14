module.exports = {
  isLucky: (number) => {
    const arr = number.split('').map((item) => +item);
    return arr[0] + arr[1] + arr[2] === arr[3] + arr[4] + arr[5] ? 'YES' : 'NO';
  },
};
