const { getLength } = require('./A');

describe('1585A. Life of a Flower', () => {
  it.each`
    n    | arr             | result
    ${1} | ${[1, 0, 1]}    | ${3}
    ${2} | ${[0, 1, 1]}    | ${7}
    ${3} | ${[1, 0, 0, 1]} | ${-1}
    ${4} | ${[0]}          | ${1}
  `('Base test: $n', ({ arr, result }) => {
    expect(getLength(arr)).toBe(result);
  });
});
