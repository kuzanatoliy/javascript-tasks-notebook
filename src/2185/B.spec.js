const { getArrValue } = require('./B');

describe('2185B. Prefix Max', () => {
  it.each`
    n    | arr                | result
    ${1} | ${[2, 1, 4, 5, 3]} | ${25}
    ${2} | ${[5, 1]}          | ${10}
    ${3} | ${[3, 2, 1]}       | ${9}
    ${4} | ${[6, 7]}          | ${14}
  `('Base test: $n', ({ arr, result }) => {
    expect(getArrValue(arr)).toBe(result);
  });
});
