/* eslint-disable prefer-destructuring */
module.exports = {
  isItPossible: (array) => {
    if (array.length === 1) {
      return array[0] > 1 ? 'NO' : 'YES';
    }
    let m1;
    let m2;
    if (array[0] < array[1]) {
      m1 = array[1];
      m2 = array[0];
    } else {
      m1 = array[0];
      m2 = array[1];
    }
    for (let c = 2; c < array.length; c++) {
      if (array[c] > m1) {
        m2 = m1;
        m1 = array[c];
      } else if (array[c] > m2) {
        m2 = array[c];
      }
    }
    return m1 - m2 > 1 ? 'NO' : 'YES';
  },
};
