module.exports = {
  getCountOfPermutes: (string) => {
    const str2 = string.split('').sort().join('');
    let count = 0;

    for (let j = 0; j < string.length; j++) {
      if (string[j] !== str2[j]) {
        count++;
      }
    }

    return count;
  },
};
