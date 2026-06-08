module.exports = {
  isWondefulContest: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === 100) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
