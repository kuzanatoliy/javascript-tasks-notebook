module.exports = {
  isItPossibleToReorder: (str1, str2) => {
    let count = 0;
    for (let j = 1; j < str1.length; j++) {
      if (str1[j - 1] === str1[j]) {
        count++;
      }
    }
    for (let jj = 1; jj < str2.length; jj++) {
      if (str2[jj - 1] === str2[jj]) {
        count++;
      }
    }
    if (str1[str1.length - 1] === str2[str2.length - 1]) {
      count++;
    }
    return count > 1 ? 'NO' : 'YES';
  },
};
