module.exports = {
  pullAllWith: (arr, values, comparator) => {
    let temp = [...arr];
    for (let j = 0; j < values.length; j++) {
      temp = temp.filter((item) => !comparator(item, values[j]));
    }
    return temp;
  },
};
