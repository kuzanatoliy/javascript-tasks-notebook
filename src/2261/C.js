module.exports = {
  getWinner: (arr) => {
    let odd = 0;
    for (let j = 0; j < arr.length; j++) {
      odd += arr[j] % 2;
    }
    return (arr.length === 2 && odd === 1) || (arr.length === 3 && odd === 3)
      ? 'Larpity'
      : 'Moggity';
  },
};
