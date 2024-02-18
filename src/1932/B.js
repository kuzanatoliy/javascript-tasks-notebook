module.exports = {
  getYear: (array) => {
    let [year] = array;
    for (let j = 1; j < array.length; j++) {
      year = year - (year % array[j]) + array[j];
    }
    return year;
  },
};
