module.exports = {
  isItPossibleToConstruct: (d, arr) => {
    const res = [];
    const sd = `${d}`;
    for (let j = 0; j < arr.length; j++) {
      let temp = arr[j];
      let f = true;
      while (temp >= d && f) {
        if (`${temp}`.includes(sd)) {
          f = false;
        } else {
          temp -= d;
        }
      }
      res.push(f ? 'NO' : 'YES');
    }
    return res;
  },
};
