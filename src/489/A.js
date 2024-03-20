module.exports = {
  getMoves: (array) => {
    const res = [];
    for (let j = 1; j < array.length; j++) {
      let min = j - 1;
      for (let jj = j; jj < array.length; jj++) {
        if (array[min] > array[jj]) {
          min = jj;
        }
      }
      if (min !== j - 1) {
        res.push([j - 1, min]);
        array[min] = array[j - 1];
      }
    }
    return res;
  },
};
