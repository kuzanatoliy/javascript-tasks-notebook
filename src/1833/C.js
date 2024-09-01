module.exports = {
  isItBeautifulArray: (array) => {
    let minOdd = 0;
    let minEven = 0;

    for (let i = 0; i < array.length; i++) {
      const element = array[i];

      if (element % 2 === 0) {
        if (minEven === 0) {
          minEven = element;
        } else if (minEven > element) {
          minEven = element;
        }
      } else if (minOdd === 0) {
        minOdd = element;
      } else if (minOdd > element) {
        minOdd = element;
      }
    }

    if (minEven === 0 || minOdd === 0) {
      return 'YES';
    } else if (minOdd < minEven) {
      return 'YES';
    } else {
      return 'NO';
    }
  },
};
