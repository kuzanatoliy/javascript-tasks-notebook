module.exports = {
  getMinVal: (arr) => {
    let curr = 0;
    for (let j = 0; j < arr.length; j++) {
      curr++;
      if (arr[j] === curr) {
        curr++;
      }
    }
    return curr;
  },
};
