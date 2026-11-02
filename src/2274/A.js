module.exports = {
  getSkipedDocuments: (arr) => {
    arr.reverse();
    let prev = 0;
    for (let j = 0; j < arr.length; j++) {
      prev = arr[j] + arr[j] - prev;
    }
    return prev / 2;
  },
};
