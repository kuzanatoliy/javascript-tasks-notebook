const arrbinary = [1];

for (let i = 0; i < arrbinary.length; i++) {
  if (arrbinary[i] < 50000) {
    arrbinary.push(arrbinary[i] * 10);
    arrbinary.push(arrbinary[i] * 10 + 1);
  } else {
    break;
  }
}

module.exports = {
  isItPossible: (num) => {
    if (arrbinary.includes(num)) {
      return 'YES';
    }
    for (let j = 1; j < arrbinary.length; j++) {
      while (num % arrbinary[j] === 0) {
        num /= arrbinary[j];
        if (num === 1) {
          return 'YES';
        }
      }
    }
    return 'NO';
  },
};
