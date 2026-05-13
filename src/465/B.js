module.exports = {
  getCountOfOperations: (arr) => {
    const temp = arr.filter(
      (item, ind, _arr) => !(_arr[ind - 1] === 0 && item === 0)
    );
    let res = temp.length - (temp[0] === 0);
    if (temp.length > 1) {
      res -= temp[temp.length - 1] === 0;
    }
    return res;
  },
};
