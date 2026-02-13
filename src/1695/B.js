module.exports = {
  getWinner: (arr) => {
    if (arr.length % 2) {
      return 'Mike';
    }
    let min = arr.length - 1;
    for (let j = arr.length - 2; j >= 0; j--) {
      if (arr[min] >= arr[j]) {
        min = j;
      }
    }
    return min % 2 ? 'Mike' : 'Joe';
  },
};
