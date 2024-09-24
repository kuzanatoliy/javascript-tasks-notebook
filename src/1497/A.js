module.exports = {
  transformArray: (array) => {
    const arr = array.sort((a, b) => a - b);
    const un = [arr[0]];
    const oth = [];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] === un[un.length - 1]) {
        oth.push(arr[j]);
        continue;
      }
      un.push(arr[j]);
    }
    return [...un, ...oth];
  },
};
