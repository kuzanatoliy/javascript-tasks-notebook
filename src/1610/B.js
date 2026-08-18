module.exports = {
  isKalindrome: (arr) => {
    for (let j = 0; j < arr.length / 2; j++) {
      if (arr[j] !== arr[arr.length - 1 - j]) {
        const temp = arr.filter((item) => item !== arr[j]);
        let count = 0;
        for (let jj = 0; jj < temp.length / 2 && !count; jj++) {
          count += temp[jj] !== temp[temp.length - 1 - jj];
        }
        const temp2 = arr.filter((item) => item !== arr[arr.length - 1 - j]);
        let count2 = 0;
        for (let jjj = 0; jjj < temp2.length / 2 && !count2; jjj++) {
          count2 += temp2[jjj] !== temp2[temp2.length - 1 - jjj];
        }
        return !count || !count2 ? 'YES' : 'NO';
      }
    }
    return 'YES';
  },
};
