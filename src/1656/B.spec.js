const { isItPossibleToGetK } = require('./A');

describe('1656B. Subtract Operation', () => {
  it.each`
    n    | k     | arr                | result
    ${1} | ${5}  | ${[4, 2, 2, 7]}    | ${'YES'}
    ${2} | ${4}  | ${[1, 9, 1, 3, 4]} | ${'NO'}
    ${3} | ${17} | ${[17, 0]}         | ${'YES'}
    ${4} | ${17} | ${[18, 18]}        | ${'NO'}
  `('Base test: $n', ({ k, arr, result }) => {
    expect(isItPossibleToGetK(k, arr)).toBe(result);
  });
});
