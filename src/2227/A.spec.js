const { isItPossibleToReachPurpose } = require('./A');

describe('2227A. Koshary', () => {
  it.each`
    n    | x     | y     | result
    ${1} | ${1}  | ${1}  | ${'NO'}
    ${2} | ${1}  | ${2}  | ${'YES'}
    ${3} | ${4}  | ${6}  | ${'YES'}
    ${4} | ${5}  | ${9}  | ${'NO'}
    ${5} | ${7}  | ${2}  | ${'YES'}
    ${6} | ${10} | ${10} | ${'YES'}
  `('Base test: $n', ({ x, y, result }) => {
    expect(isItPossibleToReachPurpose(x, y)).toBe(result);
  });
});
