module.exports = {
  getWinner: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      count += arr[j] === 0;
    }
    return count > arr.length - count ? 'Elsie' : 'Bessie';
  },
};
