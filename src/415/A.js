module.exports = {
  getOrder: (num, arr) => {
    const temp = new Array(num).fill(0);
    let prev = num + 1;
    for (let j = 0; j < arr.length; j++) {
      if (prev > arr[j]) {
        prev = arr[j];
        let jj = arr[j] - 1;
        while (!temp[jj] && jj < temp.length) {
          temp[jj] = arr[j];
          jj++;
        }
      }
    }
    return temp;
  },
};
