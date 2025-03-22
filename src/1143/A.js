module.exports = {
  getMinCount: (arr) => {
    let lInd = 1;
    let rInd = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 0) {
        lInd = j + 1;
      } else {
        rInd = j + 1;
      }
    }
    return lInd > rInd ? rInd : lInd;
  },
};
