module.exports = {
  getInitArray: (array) => {
    const res = [array[0]];
    let [current] = array;

    for (let i = 1; i < array.length; i++) {
      if (array[i] >= current) {
        res.push(array[i]);
      } else {
        res.push(array[i]);
        res.push(array[i]);
      }
      current = array[i];
    }
    return res;
  },
};
