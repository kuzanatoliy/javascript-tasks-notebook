const { checkCount } = require('./A');

describe('677A. Vanya and Fence', () => {
  it.each`
    n    | height | people                 | result
    ${1} | ${7}   | ${[4, 5, 14]}          | ${4}
    ${2} | ${1}   | ${[1, 1, 1, 1, 1, 1]}  | ${6}
    ${3} | ${5}   | ${[7, 6, 8, 9, 10, 5]} | ${11}
  `('Base test: $n', ({ height, people, result }) => {
    expect(checkCount(height, people)).toBe(result);
  });
});
