const { getPosition } = require('./A');

describe('1080A. Petya and Origami', () => {
  it.each`
    n    | num   | k    | result
    ${1} | ${3}  | ${5} | ${10}
    ${2} | ${15} | ${6} | ${38}
  `('Base test: $n', ({ num, k, result }) => {
    expect(getPosition(num, k)).toBe(result);
  });
});
