module.exports = {
  getCountOfOperations: (str) => {
    let count = 1;
    let [prev] = str;
    let fl = false;
    let res = 0;
    for (let j = 1; j < str.length; j++) {
      if (str[j] === prev) {
        count++;
      } else {
        if (count % 2 === 1) {
          fl = !fl;
        }
        if (fl) {
          res++;
        }
        count = 1;
        prev = str[j];
      }
    }
    return res;
  },
};
