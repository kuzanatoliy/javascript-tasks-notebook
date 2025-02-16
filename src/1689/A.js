/* eslint-disable max-depth */
module.exports = {
  createString: (str1, str2, k) => {
    let counter = 0;
    let i = 0;
    let j = 0;
    let c = '';
    let sw = '';
    const arr1 = str1.split('').sort();
    const arr2 = str2.split('').sort();
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        if (counter === k) {
          counter = 0;
          if (sw === 'left') {
            sw = 'right';
          } else {
            sw = 'left';
          }
        } else {
          if (sw === 'right') {
            counter = 0;
          }
          sw = 'left';
        }
      } else if (counter === k) {
        counter = 0;
        if (sw === 'right') {
          sw = 'left';
        } else {
          sw = 'right';
        }
      } else {
        if (sw === 'left') {
          counter = 0;
        }
        sw = 'right';
      }
      if (sw === 'left') {
        c += arr1[i];
        i++;
      } else {
        c += arr2[j];
        j++;
      }
      counter++;
    }
    return c;
  },
};
