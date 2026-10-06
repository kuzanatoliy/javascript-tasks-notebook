function next(x) {
  let sum = 0;

  while (x > 0) {
    const digit = x % 10;
    sum += digit * digit;
    x = Math.floor(x / 10);
  }

  return sum;
}

function getState(x) {
  for (let i = 0; i < 20; i++) {
    x = next(x);
  }

  return x;
}

module.exports = {
  getPairsCount: (arr) => {
    const freq = new Map();

    for (let i = 0; i < arr.length; i++) {
      const state = getState(arr[i]);

      freq.set(state, (freq.get(state) || 0) + 1);
    }

    let answer = 0;

    for (const count of freq.values()) {
      answer += (count * (count - 1)) / 2;
    }

    return answer;
  },
};
