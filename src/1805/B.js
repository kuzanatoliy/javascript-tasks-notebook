module.exports = {
  transformString: (str) => {
    let min = 0;
    for (let j = 1; j < str.length; j++) {
      if (str[min] >= str[j]) {
        min = j;
      }
    }
    return str[min] + str.slice(0, min) + str.slice(min + 1);
  },
};
