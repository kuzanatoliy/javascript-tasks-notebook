module.exports = {
  isItPossibleToSort: (arr) => {
    let odd = null;
    let even = null;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 === 0) {
        if (!even) {
          even = arr[j];
        } else if (even > arr[j]) {
          return 'NO';
        } else {
          even = arr[j];
        }
      } else if (!odd) {
        odd = arr[j];
      } else if (odd > arr[j]) {
        return 'NO';
      } else {
        odd = arr[j];
      }
    }
    return 'YES';
  },
};
