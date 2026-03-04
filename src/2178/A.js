module.exports = {
  isItPossibleToReduce: (str) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      count += str[j] === 'Y';
    }
    return count > 1 ? 'NO' : 'YES';
  },
};
