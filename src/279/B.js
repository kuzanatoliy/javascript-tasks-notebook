module.exports = {
  getMaxCountOfBooks: (time, booksList) => {
    let j = booksList.length - 1;
    let jj = booksList.length - 1;
    let maxCount = 0;
    let currCount = 0;
    let currTime = 0;

    while (j >= 0) {
      if (currTime <= time) {
        currCount++;
        currTime += booksList[j];
        j--;
      } else {
        currTime -= booksList[jj];
        jj--;
        currCount--;
      }

      if (currTime <= time && currCount > maxCount) {
        maxCount = currCount;
      }
    }

    return maxCount;
  },
};
