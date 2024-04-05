module.exports = {
  getBeautifulArray: (number, array) => {
    const set = new Set(array);
    if (set.size > number) {
      return -1;
    }
    for (let j = 1; set.size < number; j++) {
      set.add(j);
    }
    const temp = Array.from(set);
    let res = [];
    for (let j = 0; j < array.length; j++) {
      res = res.concat(temp);
    }
    return res;
  },
};
