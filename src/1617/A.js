/* eslint-disable max-depth */
module.exports = {
  getSmalestLStr: (str1, str2) => {
    const arr = str1.split('').sort();
    if (str2 === 'abc') {
      const indexOfA = arr.indexOf('a');
      const indexOfB = arr.indexOf('b');
      const indexOfC = arr.indexOf('c');

      if (indexOfA !== -1 && indexOfB !== -1 && indexOfC !== -1) {
        let result = '';

        for (let j = 0; j < indexOfB; j++) {
          result += arr[j];
        }

        let index = indexOfC;
        while (arr[index] === 'c') {
          result += 'c';
          index++;
          if (index === arr.length) {
            break;
          }
        }

        for (let j = indexOfB; j < indexOfC; j++) {
          result += arr[j];
        }

        for (let j = index; j < arr.length; j++) {
          result += arr[j];
        }

        return result;
      }
    }
    return arr.join('');
  },
};
