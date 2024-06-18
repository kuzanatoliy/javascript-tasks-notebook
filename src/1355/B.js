module.exports = {
  getGroupsCount: (array) => {
    const arr = array.sort((a, b) => a - b);
    let count = 0;
    let c = 0;
    for (let j = 0; j < arr.length; j++) {
      c++;
      if (arr[j] === c) {
        count++;
        c = 0;
      }
    }
    return count;
  },
};
