module.exports = {
  getCountOfBoxes: (arr) => {
    let count = 0;
    let curr = 0;
    let buy = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 1) {
        count++;
        if (curr < 1) {
          buy++;
        } else {
          curr--;
        }
      } else {
        curr = buy - (Math.ceil((count - 1) / 2) + 1);
      }
    }
    return buy;
  },
};
