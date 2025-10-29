module.exports = {
  getCountOfSaves: (num, arr) => {
    arr.sort((a, b) => b - a);
    let cat = 0;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (cat < arr[j]) {
        count++;
        cat += num - arr[j];
      } else {
        break;
      }
    }
    return count;
  },
};
