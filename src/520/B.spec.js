const { getCountOfMoves } = require('./B');

describe('520B. Two Buttons', () => {
  it.each`
    n    | a     | b      | result
    ${1} | ${10} | ${1}   | ${9}
    ${2} | ${4}  | ${6}   | ${2}
    ${3} | ${99} | ${100} | ${50}
  `('Base test: $n', ({ a, b, result }) => {
    expect(getCountOfMoves(a, b)).toBe(result);
  });
});
