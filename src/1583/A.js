const isPrime = (val) => {
  if (val === null || val <= 1 || (val !== 2 && val % 2 === 0)) {
    return false;
  } else if (val === 2) {
    return true;
  }
  const root = Math.floor(Math.sqrt(val));
  for (let i = 3; i <= root; i += 2) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  getLargestSubSet: (arr) => {
    const odd = [];
    const even = [];
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      if (arr[j] % 2 === 1) {
        odd.push(j + 1);
      } else {
        even.push(j + 1);
      }
    }

    if (isPrime(sum)) {
      odd.pop();
    }

    return [...even, ...odd];
  },
};
