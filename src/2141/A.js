module.exports = {
  getCountOfModels: (arr) => {
    const res = [];
    let [min] = arr;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > min) {
        res.push(j + 1);
      } else {
        min = arr[j];
      }
    }
    return res;
  },
};
