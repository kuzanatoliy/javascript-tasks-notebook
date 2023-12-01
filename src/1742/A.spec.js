const { checkIfOneIsSum } = require('./A');

describe('1742A. Sum', () => {
  it.each`
    n    | numbers         | result
    ${1} | ${[1, 4, 3]}    | ${'YES'}
    ${2} | ${[2, 5, 8]}    | ${'NO'}
    ${3} | ${[9, 11, 20]}  | ${'YES'}
    ${4} | ${[0, 0, 0]}    | ${'YES'}
    ${5} | ${[20, 20, 20]} | ${'NO'}
    ${6} | ${[4, 12, 3]}   | ${'NO'}
    ${7} | ${[15, 7, 8]}   | ${'YES'}
  `('Base test: $n', ({ numbers, result }) => {
    expect(checkIfOneIsSum(numbers)).toBe(result);
  });
});
